const Post = ({ title, tags, reactions }) => {
  return (
    <article className="text-center">
      <header>
        <h2>{title}</h2>
        <p>👍 {reactions}</p>
        <p>
          {tags.map((tag, index) => (
            <span key={index}>#{tag} </span>
          ))}
        </p>
      </header>

      <button type="button">სრულიად ნახვა</button>
    </article>
  );
};

export default Post;
