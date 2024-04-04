import Checkbox from "../../Components/Checkbox/Checkbox";
import { products } from "../../Data/Products";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>¿Qué hace falta?</h1>

      {products.map((category) => (
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
      ))}

    </div>
  );
};

export default Home;
