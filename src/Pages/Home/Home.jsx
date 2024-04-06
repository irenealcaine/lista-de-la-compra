import { useEffect, useState } from "react";
import Checkbox from "../../Components/Checkbox/Checkbox";
// import { products } from "../../Data/Products";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from '../../Firebase/firebase-config'
import "./Home.scss";
import Loader from "../../Components/Loader/Loader";

const Home = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    const unsub = onSnapshot(collection(db, 'productos'), (snapShot) => {
      let list = [];
      if (snapShot.docs.length > 0) {
        snapShot.docs.forEach(
          (doc) => {
            list.push({
              id: doc.id,
              ...doc.data()
            });
            setLoading(false)

            setData(list);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        setLoading(false)
        setError('Error')
      }

    });

    return () => {
      unsub();
    };
  }, []);

  const handleCheckboxChange = async (id, toBuy) => {
    const productRef = doc(db, 'productos', id);

    await updateDoc(productRef, {
      toBuy: !toBuy
    });

    setData(data.map(item => item.id === id ? { ...item, toBuy: !toBuy } : item));
  };


  return (
    <div className="home">
      <h1>¿Qué hace falta?</h1>

      {/* {products.map((category) => (
        <div key={category.id}>
          <h2>{category.title}</h2>

          <ul>
            {category.items.map((item) => (
              <li key={item.id}>
                <Checkbox isChecked={item.toBuy} />
                {item.name}
              </li>
            ))}
          </ul>

        </div>
      ))} */}

      {error && error}
      {loading && <Loader />}
      {data.map((producto) => (
        <div key={producto.id} className="">
          <h2>{producto.category}</h2>
          <p>{producto.name}</p>
          <Checkbox isChecked={producto.toBuy} onChange={() => handleCheckboxChange(producto.id, producto.toBuy)} />

        </div>
      ))}

    </div>
  );
};

export default Home;
