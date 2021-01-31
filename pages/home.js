import Header from "../components/header";
import Menu from "../components/menu";
import Contents from "../components/content";

export default function HomePage({ data }) {
  return (
    <div>
      <Header />
      <Menu />
      {data.menu.map((singleData, index) => <Contents key={index} id={index} singleData={singleData} />)}
    </div>
  );
}

export async function getStaticProps() {
  const data = {
    "menu": [
      {
        "momos": [
          {
            "name": "Veg Momos",
            "price": 40,
            "image": "momos.jpg"
          },
          {
            "name": "Non-Veg Momos",
            "price": 50,
            "image": "momos.jpg"
          }
        ]
      },
      {
        "rolls": [
          {
            "name": "Veg Roll",
            "price": 30,
            "image": "rolls.jpg"
          },
          {
            "name": "Egg Roll",
            "price": 40,
            "image": "rolls.jpg"
          }
        ]
      }
    ]
  }
  return {
    props: {
      data
    }
  }
}