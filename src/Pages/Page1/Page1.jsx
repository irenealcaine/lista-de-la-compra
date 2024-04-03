import Checkbox from "../../Components/Checkbox/Checkbox";
import { products } from "../../Data/Products";
import "./Page1.scss";

const Page1 = () => {

  return (
    <div className="page1">
      <h1>Lista de la compra</h1>
      <h2>¿Qué hay que comprar?</h2>
      {products.map((category) => (
        <div>
          <h3>{category.title}</h3>
          <ul>
            {category.items.filter(item => item.toBuy).map((item) => (
              <li>
                {item.name}
              </li>
            ))}

          </ul>
        </div>

      ))}
    </div>
  );
};

export default Page1;
