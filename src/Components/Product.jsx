import "../styles/Components/Product.css";

const Product = ({ title, description, image, imageAlt, price }) => {
  return (
    <article>
      <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt={imageAlt} />
        <p>$ {price}</p>
      </section>

      <button type="button" className="add-to-cart">
        დამატება
      </button>
    </article>
  );
};

export default Product;
