import { useEffect, useState } from "react";
import { products } from "../../Data/Products";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from '../../Firebase/firebase-config'


import "./Page1.scss";
import Checkbox from "../../Components/Checkbox/Checkbox";

const Page1 = () => {

  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // setLoading(true)
    const unsub = onSnapshot(collection(db, 'productos'), (snapShot) => {
      let list = [];
      if (snapShot.docs.length > 0) {
        snapShot.docs.forEach(
          (doc) => {
            list.push({
              id: doc.id,
              ...doc.data()
            });
            // setLoading(false)

            setData(list);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        // setLoading(false)
        setError('Error')
      }

    });

    return () => {
      unsub();
    };
  }, []);

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

      {data.filter(item => item.toBuy).map((producto) => (
        <div key={producto.id} className="">
          <h2>{producto.category}</h2>
          <p>{producto.name}</p>

        </div>
      ))}
    </div>
  );
};

export default Page1;
