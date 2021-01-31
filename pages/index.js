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
            "image": "momos.jpg",
            "time": 30
          },
          {
            "name": "Paneer Momos",
            "price": 50,
            "image": "momos.jpg",
            "time": 30
          },
          {
            "name": "Chicken Momos",
            "price": 50,
            "image": "momos.jpg",
            "time": 30
          },
          {
            "name": "Fried Veg Momos",
            "price": 50,
            "image": "momos.jpg",
            "time": 40
          },
          {
            "name": "Fried Paneer Momos",
            "price": 60,
            "image": "momos.jpg",
            "time": 40
          },
          {
            "name": "Fried Chicken Momos",
            "price": 60,
            "image": "momos.jpg",
            "time": 40
          },
          {
            "name": "Gravy Momos",
            "price": 70,
            "image": "momos.jpg",
            "time": 40
          },
          {
            "name": "Manchurian Momos",
            "price": 70,
            "image": "momos.jpg",
            "time": 40
          }
        ]
      },
      {
        "rolls": [
          {
            "name": "Egg Roll",
            "price": 30,
            "image": "rolls.jpg",
            "time": 30
          },
          {
            "name": "Double Egg Roll",
            "price": 40,
            "image": "rolls.jpg",
            "time": 30
          },
          {
            "name": "Paneer Roll",
            "price": 40,
            "image": "rolls.jpg",
            "time": 30
          },
          {
            "name": "Chicken Roll",
            "price": 50,
            "image": "rolls.jpg",
            "time": 30
          },
          {
            "name": "Double Chicken Roll",
            "price": 60,
            "image": "rolls.jpg",
            "time": 30
          }
        ]
      },
      {
        "shawarma": [
          {
            "name": "Chicken Shawarma",
            "price": 50,
            "image": "shawarma.jpg",
            "time": 30
          },
          {
            "name": "Shawarma Special",
            "price": 70,
            "image": "shawarma.jpg",
            "time": 40
          },
        ]
      },
      {
        "noodles": [
          {
            "name": "Veg Noodles",
            "price": 30,
            "image": "noodles.jpg",
            "time": 30
          },
          {
            "name": "Egg Noodles",
            "price": 40,
            "image": "noodles.jpg",
            "time": 35
          },
          {
            "name": "Chicken Noodles",
            "price": 50,
            "image": "noodles.jpg",
            "time": 45
          },
          {
            "name": "Egg Chicken Noodles",
            "price": 60,
            "image": "noodles.jpg",
            "time": 45
          },
        ]
      },
      {
        "plater": [
          {
            "name": "Chicken Lollypop 6P",
            "price": 150,
            "image": "plater.png",
            "time": 50
          },
          {
            "name": "Chicken Chilly 8P",
            "price": 100,
            "image": "plater.png",
            "time": 45
          },
          {
            "name": "Paneer Chilly 8P",
            "price": 100,
            "image": "plater.png",
            "time": 45
          },
        ]
      },
      {
        "pakora": [
          {
            "name": "Veg Pakora 6P",
            "price": 50,
            "image": "pakora.jpg",
            "time": 30
          },
          {
            "name": "Paneer Pakora 6P",
            "price": 60,
            "image": "pakora.jpg",
            "time": 30
          },
          {
            "name": "Chicken Cheese Ball",
            "price": 90,
            "image": "pakora.jpg",
            "time": 30
          }
        ]
      },
      {
        "soup": [
          {
            "name": "Veg Hot N Sour Soup",
            "price": 25,
            "image": "soup.jpg",
            "time": 25
          },
          {
            "name": "Manchaw Chicken Soup",
            "price": 30,
            "image": "soup.jpg",
            "time": 30
          },
          {
            "name": "Tomato Soup",
            "price": 20,
            "image": "soup.jpg",
            "time": 25
          }
        ]
      },
      {
        "beverages": [
          {
            "name": "Hot Coffee",
            "price": 25,
            "image": "beverages.jpg",
            "time": 25
          },
          {
            "name": "Cold Coffee",
            "price": 40,
            "image": "beverages.jpg",
            "time": 10
          },
          {
            "name": "Mineral Water",
            "price": 20,
            "image": "beverages.jpg",
            "time": 0
          },
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