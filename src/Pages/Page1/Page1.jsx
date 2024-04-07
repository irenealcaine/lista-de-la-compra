import { useEffect, useState } from "react";
import { products } from "../../Data/Products";
import { collection, onSnapshot, doc, updateDoc, query, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/firebase-config'
import { UserAuth } from '../../Context/AuthContext'

import "./Page1.scss";
import Loader from "../../Components/Loader/Loader";
import Checkbox from "../../Components/Checkbox/Checkbox";

const Page1 = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { user } = UserAuth()


  // useEffect(() => {
  //   setLoading(true)
  //   const unsub = onSnapshot(collection(db, 'productos'), (snapShot) => {
  //     let list = [];
  //     if (snapShot.docs.length > 0) {
  //       snapShot.docs.forEach(
  //         (doc) => {
  //           list.push({
  //             id: doc.id,
  //             ...doc.data()
  //           });
  //           setLoading(false)

  //           setData(list);
  //         },
  //         (error) => {
  //           console.log(error);
  //         }
  //       );
  //     } else {
  //       setLoading(false)
  //       setError('Error')
  //     }

  //   });

  //   return () => {
  //     unsub();
  //   };
  // }, []);

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
    <div className="page1">
      <h1>Lista de la compra</h1>
      {/* {products.map((category) => (
        <div>
          <h2>{category.title}</h2>
          <ul>
            {category.items.filter(item => item.toBuy).map((item) => (
              <li>
                {item.name}
              </li>
            ))}

          </ul>
        </div>

      ))} */}
      {error && error}

      {loading && <Loader />}
      {/* {data.filter(item => item.toBuy).map((producto) => (
        <div key={producto.id} className="">
          <h2>{producto.category}</h2>
          <p>{producto.name}</p>

        </div>
      ))} */}
      {console.log(data)}

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

export default Page1;
