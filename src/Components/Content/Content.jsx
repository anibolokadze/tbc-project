function Content({ title, description, imageUrl, imageAlt }) {
  return (
    <main>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </main>
  );
}

export default Content;
