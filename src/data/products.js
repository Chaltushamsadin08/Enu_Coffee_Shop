import cappuccino from "../assets/cappuccino.jpg";
import latte from "../assets/latte.jpg";
import mocha from "../assets/mocha.jpg";
import espresso from "../assets/espresso.jpg";
import americano from "../assets/americano.jpg";
import blackcoffee from "../assets/blackcoffee.jpg";
import caramelWhiteMocha from "../assets/caramel-white-mocha.jpg";
import coffeechocolate  from "../assets/COFFEECHOCOLATE.jpg"

const products = [
  {
    id: 1,
    name: "Cappuccino",
    price: 3.5,
    description: "Rich espresso with steamed milk foam.",
    image: cappuccino,
  },
  {
    id: 2,
    name: "Mocha",
    price: 4.0,
    description: "Rich mocha with steamed milk foam.",
    image: mocha,
  },
  {
    id: 3,
    name: "Black Coffee",
    price: 4.0,
    description: "Strong black coffee.",
    image: blackcoffee,
  },
  {
    id: 4,
    name: "White Mocha",
    price: 4.2,
    description: "Caramel white mocha iced coffee.",
    image: caramelWhiteMocha,
  },
  {
    id: 5,
    name: "Espresso",
    price: 2.8,
    description: "Strong and bold espresso shot.",
    image: espresso,
  },
  {
    id: 6,
    name: "Latte",
    price: 4.0,
    description: "Rich latte with steamed milk foam.",
    image: latte,
  },
  {
    id: 7,
    name :"Coffee Chocolate",
    price: 3.2,
    description: "Strong and bold Coffee Chocolate.",
    image: coffeechocolate,
  },
  {
    id: 8,
    name :"Americano",
    price: 3.2,
    description: "Strong and bold Americano shot.",
    image: americano,
  },
];

export default products;
