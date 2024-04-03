import { products } from "../../Data/Products";
import "./Page1.scss";

const Page1 = () => {

  return (
    <div className="page1">
      <h1>Lista de la compra</h1>
      {products.map((category) => (
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

      ))}
    </div>
  );
};

export default Page1;
