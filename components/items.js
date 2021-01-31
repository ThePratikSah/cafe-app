export default function Items({name, price, image, time}) {
  return (
    <div id="" className="contents__container">
      <img src={"./images/" + image} alt="Momos"/>
      <h2>{name}</h2>
      <span>₹{price} per person</span>
      <span className="dot"> &middot; </span>
      <span>{time} min</span>
    </div>
  );
}