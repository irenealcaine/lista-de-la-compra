import Button from "../../Components/Button/Button";
import "./Page3.scss";
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase-config';
import { UserAuth } from '../../Context/AuthContext'
import { useEffect, useState } from "react";
import { collection, doc, updateDoc, query, onSnapshot, getDoc, setDoc } from "firebase/firestore";
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


  return (
    <div className="page3">
      <h1>Perfil</h1>

      <p>Correo electrónico</p>
      <p>{user?.email}</p>

      <h2>Borrar productos</h2>
      <ul className="category-list">
        {data.map((category) => (
          <li key={category.id} className="category-item">
            <h3>{category.category}</h3>
            <ul className="product-list">
              {category.items.map((item) => (
                <li key={item.id} className="product-item">
                  <p>{item.name}<span><MdDeleteOutline /></span></p>

                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Button onClick={() => signOut(auth)} value={'Cerrar sesión'} />
    </div>
  );
};

export default Page3;
