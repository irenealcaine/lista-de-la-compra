import { useContext, useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from '../../Firebase/firebase-config'
import { UserAuth } from '../../Context/AuthContext'
import "./ListaDeLaCompra.scss";
import Loader from "../../Components/Loader/Loader";
import { DarkModeContext } from "../../Context/darkModeContext";
import { Link } from "react-router-dom";

const ListaDeLaCompra = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState(false)
  const { darkMode } = useContext(DarkModeContext);


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

  useEffect(() => {
    if (data.every(category => category.items.every(item => item.toBuy == false))) {
      setMessage(true);
    } else {
      setMessage(false);
    }
  }, [data]);

  return (
    <div className="page1">
      <h1>Lista de la compra</h1>

      {loading && <Loader />}

      {error && error}
      {message &&
        <div>
          <p>¡No hay nada que comprar!</p>
          <p>Añade cosas a la lista de la compra <Link to={'/'} className={`${darkMode ? "dark" : ""}`}>aquí</Link>.</p>
        </div>
      }

      <ul className="category-list">
        {data.filter(category => category.items.some(item => item.toBuy)).map((category) => (
          <li key={category.id} className="category-item">
            <h2>{category.category}</h2>
            <ul className="product-list">
              {category.items.filter(item => item.toBuy).map((item) => (
                <li key={item.id} className="product-item">
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

export default ListaDeLaCompra;
