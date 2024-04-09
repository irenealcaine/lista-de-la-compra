import { useEffect, useState } from "react";
import Checkbox from "../../Components/Checkbox/Checkbox";
import { collection, doc, updateDoc, query, onSnapshot, getDoc, setDoc } from "firebase/firestore";
import { db } from '../../Firebase/firebase-config'
import "./Home.scss";
import Loader from "../../Components/Loader/Loader";
import { UserAuth } from '../../Context/AuthContext'
import { v4 as uuid } from 'uuid';
import Button from "../../Components/Button/Button";


const Home = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const { user } = UserAuth()

  const createItem = (name) => ({ id: uuid(), name, toBuy: false });

  const addCategoryItems = async (categoryName, items) => {
    if (!user?.uid) return;

    const categoryDocRef = doc(db, "usuarios", user.uid, "categorias", categoryName);
    try {
      await setDoc(categoryDocRef, {
        category: categoryName,
        items: items.map((itemName) => createItem(itemName)),
      }, { merge: true });
    } catch (error) {
      console.error(`Error al agregar elementos por defecto en ${categoryName}:`, error);
      setError(error);
    }
  };

  const defaultItems = {
    Esenciales: ["Aceite de oliva", "Aceite de girasol", "Sal", "Azúcar", "Huevos"],
    Frutas: ["Manzanas", "Plátanos", 'Tomates'],
    Verduras: ["Berenjenas", "Lechuga"],
    Carnes: ["Pechugas de pollo", "Lomo"],
    Pescados: ["Merluza"],
    Lácteos: ["Leche semidesnatada", "Queso rallado", "Queso en polvo"],
    Conservas: ["Berberechos", "Mejillones"],
    Despensa: ["Lentejas"],
    Salsas: ["Mayonesa", "Ketchup", "Mostaza"],
    Especias: ["Ajo en polvo", "Perejil", "Orégano"],
    Mascotas: ["Comida de perro", "Comida de gato", "Arena de gato"],
    Limpieza: ["Lejía"],
    Baño: ["Crema de dientes", 'Gel', 'Champú'],
  };

  const addDefaultItems = async () => {
    for (const [categoryName, items] of Object.entries(defaultItems)) {
      await addCategoryItems(categoryName, items);
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

  useEffect(() => {
    if (data.every(category => category.items.length === 0)) {
      setMessage('No hay items');
    } else {
      setMessage('');
    }
  }, [data]); // Dependencias: este efecto se ejecuta solo cuando `data` cambia.


  return (
    <div className="home">
      <h1>¿Qué hace falta?</h1>

      {error && error}
      {message && message}
      {loading && <Loader />}

      <ul className="category-list">
        {data.map((category) => (
          <div>
            {category.items.length > 0
              ? <li key={category.id} className="category-item">
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
              : ''}

          </div>

        ))}
      </ul>

      <Button onClick={addDefaultItems} value={'Agregar productos por defecto'} />
    </div>
  );
};

export default Home;
