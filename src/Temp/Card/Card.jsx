export default function Card({ name, description, price, currency }) {
  return (
    <div className="cardWrapper">
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <p>${currency}</p>
      <img
        width={200}
        height={200}
        src="https://images.unsplash.com/photo-1710744722644-2114b2624557?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
        alt={name}
      />
    </div>
  );
}
