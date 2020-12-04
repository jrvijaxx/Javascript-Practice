"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivary: function ({ starterIndex, mainIndex, time, address }) {
    // console.log(
    //   `order rececived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    // );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivary({
  time: "20:30",
  address: "Arogya colony Shegaon",
  mainIndex: 2,
  starterIndex: 3,
});

///////// Spread Operator ////////////
const arrSpread = [2, 3, 4];
const newArr = [0, 1, ...arrSpread];
console.log(newArr);

const ingredients = [
  prompt("Lets's make pasta! Ingredeint 1?"),
  prompt("Ingredeint 2?"),
  prompt("Ingredeint 3?"),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients)

///////// Object Descrtucturing ////////////

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurantName, hours, tags);

// DEFAULT VALUES
const { menu = [], starterMenu: staters = [] } = restaurant;
// console.log(menu, staters);

// MUTATING VARIABLES
let a = 111;
let b = 333;
const obj = { a: 2, b: 3 };
({ a, b } = obj);
// console.log(a,b);

// NESTED OBJECT
const {
  fri: { open, close },
} = openingHours;
// console.log(open, close);

////////// Array Descrtucturing //////////
const arr = ["Vijay", 3, 5];
const [x, y, z] = arr;
// console.log(`Hello ${x}`);
// console.log(arr);

let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// SWITCHING VARIABLES

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// console.log(temp);

[main, secondary] = [secondary, main];
// console.log(main, secondary);

// RECIVE 2 RETURN VALUES FROM A FUNCTION
const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// NESTED DESCRTUCTURING
const nested = [2, 4, [3, 5]];
const [i, , [j, k]] = nested;
// console.log(i, j, k);

// DEFAULT VALUES
const [p, q, r = 1] = [5, 6];
// console.log(p, q, r);
