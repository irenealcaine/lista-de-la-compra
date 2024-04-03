import BlogCard from "../../Components/BlogCard/BlogCard";
import Button from "../../Components/Button/Button";
import Checkbox from "../../Components/Checkbox/Checkbox";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { posts } from "../../Data/BlogPosts";
import { products } from "../../Data/Products";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>Lista de la compra</h1>
      <h2>¿Qúe hace falta?</h2>
      {products.map((category) => (
        <div>
          <h3>{category.title}</h3>
          <ul>


            {category.items.map((item) => (
              <li>
                <Checkbox isChecked={item.toBuy} />
                {item.name}
              </li>
            ))}

          </ul>
        </div>

      ))}

      <div className="buttons-container">
        <Button value={"Default"} href={"https://google.es"} />
        <Button
          value={"Secondary"}
          href={"https://google.es"}
          color={"secondary"}
        />
        <Button
          value={"Disabled"}
          href={"https://google.es"}
          color={"purple"}
          disabled={true}
        />
      </div>

      <Loader />
    </div>
  );
};

export default Home;
