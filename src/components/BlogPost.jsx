import Image from "next/image";

const BlogPost = ({ title, description, date, image, imageAlt }) => {
  return (
    <article className="text-center">
      <header>
        <h2>{title}</h2>
        <p>{date}</p>
      </header>
      <Image
        className="mx-auto"
        src={image}
        width={100}
        height={100}
        alt={imageAlt}
      />
      <div className="content">
        <p>{description}</p>
        <button type="button">სრულიად ნახვა</button>
      </div>
    </article>
  );
};

export default BlogPost;
