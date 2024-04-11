import { useContext, useEffect, useState } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';

import { collection, doc, updateDoc, query, onSnapshot, getDoc, setDoc } from "firebase/firestore";
import { db } from '../../Firebase/firebase-config'

import { UserAuth } from '../../Context/AuthContext'
import { DarkModeContext } from "../../Context/darkModeContext";
import { defaultItems } from "../../Utils/Constants";

import Checkbox from "../../Components/Checkbox/Checkbox";
import Loader from "../../Components/Loader/Loader";
import Button from "../../Components/Button/Button";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { user } = UserAuth()

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState(false)

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
      setMessage(true);
    } else {
      setMessage(false);
    }
  }, [data]);

  return (
    <div className="home">
      <h1>¿Qué hace falta?</h1>

      {loading && <Loader />}

      {error && error}
      {message &&
        <div>
          <p>Ups... parece que aquí no hay nada, prueba a darle al botón de aquí abajo para añadir unas cuantas cosas.</p>
          <p>Podrás borrar los que no quieras <Link to={'/agregar-elemento'} className={`${darkMode ? "dark" : ""}`}>aquí</Link> o añadir más <Link to={'/perfil'} className={`${darkMode ? "dark" : ""}`}>aquí</Link>.</p>
        </div>
      }

      <ul className="category-list">
        {data.map((category) => (
          <div key={category.id}>

            {category.items.length > 0

              ? <li className="category-item">
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
