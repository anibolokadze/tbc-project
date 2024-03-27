const BlogPost = ({ title, description, date, image, imageAlt }) => {
  return (
    <article className="blog-post">
      <header>
        <h2>{title}</h2>
        <p>{date}</p>
      </header>
      <img src={image} alt={imageAlt} />
      <div className="content">
        <p>{description}</p>
        <button type="button">სრულიად ნახვა</button>
      </div>
    </article>
  );
};

export default BlogPost;
