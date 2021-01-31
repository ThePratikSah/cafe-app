export default function Items({name, price, image}) {
  return (
    <div id="" className="contents__container">
      <img src={"./images/" + image} alt="Momos"/>
      <h2>{name}</h2>
      <p>₹{price} per person</p>
    </div>
  );
}