import "./Product.css";

function Content({ title, description, imageUrl, imageAlt }) {
  return (
    <div className="product">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imageUrl} alt={imageAlt} className="product-image" />
      </div>
      <button className="addToCart">
        <p>Add To Cart</p>
      </button>
    </div>
  );
}

export default Content;
