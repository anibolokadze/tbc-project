import Image from "next/image";

const Product = ({ title, description, image, imageAlt, price }) => {
  return (
    <article className="mx-auto max-w-80 text-center ">
      <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <Image
          src={image}
          width={100}
          height={100}
          alt={imageAlt}
          className="mx-auto"
        />
        <p>$ {price}</p>
      </section>

      <button type="button" className="add-to-cart">
        დამატება
      </button>
    </article>
  );
};

export default Product;
