import { useEffect, useState } from "react";
import Checkbox from "../../Components/Checkbox/Checkbox";
import { collection, doc, updateDoc, query, onSnapshot, getDoc, setDoc } from "firebase/firestore";
import { db } from '../../Firebase/firebase-config'
import "./Home.scss";
import Loader from "../../Components/Loader/Loader";
import { UserAuth } from '../../Context/AuthContext'
import { v4 as uuid } from 'uuid';


const Home = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { user } = UserAuth()

  const defaultItems = [
    { id: uuid(), name: "Aceite de girasol", toBuy: false },
    { id: uuid(), name: "Sal", toBuy: true },
  ];

  const addDefaultItems = async () => {
    if (!user?.uid) return;

    const categoryDocRef = doc(db, "usuarios", user.uid, "categorias", "Esenciales");

    try {
      await setDoc(categoryDocRef, {
        category: "Esenciales",
        items: defaultItems
      }, { merge: true });
    } catch (error) {
      console.error("Error al agregar elementos por defecto:", error);
      setError(error);
    }
  };

  useEffect(() => {

    if (!user?.uid) {
      setLoading(false);
      return;
    }

    setLoading(true)
    const q = query(collection(db, "usuarios", user?.uid, "categorias"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let list = [];

      querySnapshot.forEach((doc) => {

        list.push({
          id: doc.id,
          ...doc.data()
        });
      })
      setData(list);
      setLoading(false)
    }, (error) => {
      console.log(error);
      setError(error.message);
      setLoading(false);
    });


    return () => {
      unsub();
    };

  }, [user?.uid]);

  const handleCheckboxChange = async (categoryId, itemId, currentToBuy) => {

    const categoryRef = doc(db, "usuarios", user.uid, "categorias", categoryId);

    try {
      const categorySnap = await getDoc(categoryRef);
      if (categorySnap.exists()) {
        const items = categorySnap.data().items.map(item =>
          item.id === itemId ? { ...item, toBuy: !currentToBuy } : item
        );

        await updateDoc(categoryRef, { items });

        setData(data.map(category =>
          category.id === categoryId ? { ...category, items } : category
        ));
      }
    } catch (error) {
      console.error("Error al actualizar el item:", error);
      setError(error);
    }
  };


  return (
    <div className="home">
      <h1>¿Qué hace falta?</h1>

      {error && error}
      {loading && <Loader />}

      {data.length === 0 && (
        <button onClick={addDefaultItems}>Agregar Elementos Por Defecto</button>
      )}

      <ul className="category-list">
        {data.map((category) => (
          <li key={category.id} className="category-item">
            <h2>{category.category}</h2>
            <ul className="product-list">
              {category.items.map((item) => (
                <li key={item.id} className="product-item">

                  <Checkbox isChecked={item.toBuy} onChange={() => handleCheckboxChange(category.id, item.id, item.toBuy)} />
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Home;
