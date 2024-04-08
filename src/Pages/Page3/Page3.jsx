import Button from "../../Components/Button/Button";
import "./Page3.scss";
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase-config';
import { UserAuth } from '../../Context/AuthContext'
import { useEffect, useState } from "react";
import { collection, doc, updateDoc, query, onSnapshot, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../Firebase/firebase-config'
import { MdDeleteOutline } from "react-icons/md";


const Page3 = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { user } = UserAuth()

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

  const handleDelete = async (categoryId, itemId) => {
    if (!user?.uid) return;

    const categoryRef = doc(db, "usuarios", user.uid, "categorias", categoryId);


    try {
      const categorySnap = await getDoc(categoryRef);
      if (categorySnap.exists()) {
        const newItems = categorySnap.data().items.filter(item => item.id !== itemId);

        await updateDoc(categoryRef, { items: newItems });

        setData(data.map(category =>
          category.id === categoryId ? { ...category, items: newItems } : category
        ));
        console.log(data)
      } else {
        console.log("Documento de categoría no encontrado");
      }
    } catch (error) {
      console.error("Error al borrar el item:", error);
      setError(error);
    }
  };



  return (
    <div className="page3">
      <h1>Perfil</h1>

      <p>Correo electrónico</p>
      <p>{user?.email}</p>

      <h2>Borrar productos</h2>
      <ul className="category-list">
        {data.map((category) => (
          <div>
            {category.items.length > 0
              ? <li key={category.id} className="category-item">
                <h3>{category.category}</h3>
                <ul className="product-list">
                  {category.items.map((item) => (
                    <li key={item.id} className="product-item">
                      <p>{item.name}</p>
                      <span onClick={() => handleDelete(category.id, item.id)}><MdDeleteOutline /></span>

                    </li>
                  ))}
                </ul>
              </li>
              : ''}

          </div>

        ))}
      </ul>
      <Button onClick={() => signOut(auth)} value={'Cerrar sesión'} />
    </div>
  );
};

export default Page3;
