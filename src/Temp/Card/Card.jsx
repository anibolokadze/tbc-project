export default function Card({ name, description, price, currency, imageURL }) {
  return (
    <div className="cardWrapper">
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <p>${currency}</p>
      <img src={imageURL} alt={name} />
    </div>
  );
}
