export default function Items({name, price, image}) {
  return (
    <div id="" className="contents__container">
      <img src={"./images/" + image} alt="Momos"/>
      <h2>{name}</h2>
      <span>₹{price} per person</span>
      <span className="dot"> &middot; </span>
      <span>45 min</span>
    </div>
  );
}