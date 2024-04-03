import React from "react";
import Button from "../Button/Button";
import "./ProductCard.scss";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ title, price, offer, onSale, image, description }) => {
  return (
    <div className="product-card">
      <img className="product-card__image" src={image} alt={title} />
      <div className="product-card__info">
        <h3 className="product-card__name">{title}</h3>
        {onSale ? (
          <div>
            <span className="product-card__price__main">{price} €</span>{" "}
            <span className="product-card__price">{offer} €</span>
          </div>
        ) : (
          <span className="product-card__price">{price} €</span>
        )}
        <p className="product-card__description">{description}</p>
      </div>
      {onSale && <div className="product-card__onSale">¡En oferta!</div>}
      <div className="buttons-container">
        <Button
          value={<FaCartShopping />}
          href={"https://google.es"}
          className={"product-button"}
        />
        <Button
          value={<FaHeart />}
          href={"https://google.es"}
          color={"secondary"}
          className={"product-button"}
        />
      </div>
    </div>
  );
};

export default ProductCard;
