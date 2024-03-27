import "../styles/Components/Product.css";

const Product = ({ title, description, image, imageAlt }) => {
  return (
    <article>
      <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt={imageAlt} />
      </section>

      <button type="button" className="addToCart">
        Add To Cart
      </button>
    </article>
  );
};

export default Product;
