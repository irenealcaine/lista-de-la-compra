import BlogCard from "../../Components/BlogCard/BlogCard";
import Button from "../../Components/Button/Button";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { posts } from "../../Data/BlogPosts";
import { products } from "../../Data/Products";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <h2>Subtitle</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        placeat a explicabo?
      </p>

      <h3>Paragraph</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        placeat a explicabo? Molestiae error, minus libero dolorem eveniet
        mollitia accusantium voluptate voluptates ipsa pariatur itaque ratione
        numquam ea, quo quibusdam. Voluptatibus velit tempora sed veritatis
        porro numquam repellat cum delectus. Aliquid doloremque aperiam rem
        accusamus ut, veniam velit, amet dolore, at libero voluptatem iure?
      </p>

      <h2>Buttons</h2>
      <div className="buttons-container">
        <Button value={"Default"} href={"https://google.es"} />
        <Button
          value={"Secondary"}
          href={"https://google.es"}
          color={"secondary"}
        />

        <Button value={"Blue"} href={"https://google.es"} color={"blue"} />
        <Button value={"Green"} href={"https://google.es"} color={"green"} />
        <Button value={"Red"} href={"https://google.es"} color={"red"} />
        <Button value={"Purple"} href={"https://google.es"} color={"purple"} />

        <Button
          value={"Disabled"}
          href={"https://google.es"}
          color={"purple"}
          disabled={true}
        />
      </div>

      <h2>Loaders</h2>
      <Loader />
      <Loader color={"blue"} />
      <Loader color={"green"} />
      <Loader color={"red"} />
      <Loader color={"purple"} />

      <h2>Blog Card</h2>

      {posts.slice(0, 1).map((post) => (
        <BlogCard
          key={post.id}
          image={post.image}
          title={post.title}
          subtitle={post.subtitle}
          content={post.content}
          author={post.author}
          date={post.date}
        />
      ))}

      <h2>Product Card</h2>

      {products.slice(0, 1).map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price.main}
          offer={product.price.offer}
          onSale={product.price.onSale}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default Home;
