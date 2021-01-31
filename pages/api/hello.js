// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
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
  );
}
