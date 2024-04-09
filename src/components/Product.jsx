const Product = ({ id, title, description, image, price }) => {
  return (
    <article className="mx-auto max-w-80 text-center ">
      <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt={description} className="mx-auto" />
        <p>$ {price}</p>
      </section>
    </article>
  );
};

export default Product;
