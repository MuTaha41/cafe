import { faker } from "@faker-js/faker";
import { storeFoodData } from "../helpers/helpers.js";

const validCategories = ['Vegetarian', 'Vegan', 'Seafood', 'Regular'];

export const generateFoodData = (type: string, category: string): FoodData => {
  if (!validCategories.includes(category)) {
    throw new Error(`Invalid category: ${category}. Must be one of ${validCategories.join(", ")}`);
  }

  const baseToppings = {
    Vegetarian: ["bell peppers", "spinach", "mushrooms", "olives", "tomatoes"],
    Vegan: ["tomatoes", "lettuce", "cucumbers", "bell peppers", "chickpeas"],
    Seafood: ["shrimp", "tuna", "salmon", "squid", "anchovies"],
    Regular: ["cheese", "pepperoni", "ham", "bacon", "sausage"]
  };

  const generatedFoodData: FoodData = {
    type: type,
    size: faker.helpers.arrayElement(["small", "medium", "large"]),
    toppings: faker.helpers.arrayElements(baseToppings[category], faker.datatype.number({ min: 1, max: 5 })),
    price: faker.commerce.price(5, 30, 2, "$"),
    calories: faker.datatype.number({ min: 250, max: 1200 }),
    category: category as 'Vegetarian' | 'Vegan' | 'Seafood' | 'Regular'
  };

  storeFoodData(generatedFoodData).catch(console.error);
  return generatedFoodData;
};

// import { faker } from "@faker-js/faker";
// import { storeFoodData } from "../helpers/helpers.js";

// type Category = 'Vegetarian' | 'Vegan' | 'Seafood' | 'Regular';

// interface FoodData {
//   foodType: string;
//   size: string;
//   toppings: string[];
//   price: string;
//   calories: number;
//   category: Category;
// }

// const validCategories: Category[] = ['Vegetarian', 'Vegan', 'Seafood', 'Regular'];

// export const generateFoodData = async (type: string, category: Category): Promise<FoodData> => {
//   if (!validCategories.includes(category)) {
//     throw new Error(`Invalid category: ${category}. Must be one of ${validCategories.join(", ")}`);
//   }

//   const baseToppings = {
//     Vegetarian: ["bell peppers", "spinach", "mushrooms", "olives", "tomatoes"],
//     Vegan: ["tomatoes", "lettuce", "cucumbers", "bell peppers", "chickpeas"],
//     Seafood: ["shrimp", "tuna", "salmon", "squid", "anchovies"],
//     Regular: ["cheese", "pepperoni", "ham", "bacon", "sausage"]
//   };

//   const generatedFoodData: FoodData = {
//     type: type,
//     size: faker.helpers.arrayElement(["small", "medium", "large"]),
//     toppings: faker.helpers.arrayElements(baseToppings[category], faker.number.int({ min: 1, max: 5 })),
//     price: faker.commerce.price({ min: 5, max: 30, dec: 2, symbol: "$" }),
//     calories: faker.number.int({ min: 250, max: 1200 }),
//     category: category
//   };

//   try {
//     await storeFoodData(generatedFoodData);
//   } catch (error) {
//     console.error("Failed to store food data:", error);
//     throw new Error("Failed to store food data");
//   }

//   return generatedFoodData;
// };




