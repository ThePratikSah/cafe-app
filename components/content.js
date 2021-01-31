import Items from "./items";

export default function Contents({singleData, id}) {
  let key = Object.keys(singleData);
  return (
    <div id={id} className="contents">
      {singleData[key].map((ele, index) => <Items key={index} name={ele.name} image={ele.image} price={ele.price} />)}
    </div>
  );
}