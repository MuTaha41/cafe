import { faker } from "@faker-js/faker";
import { storeDrinkData } from "../helpers/helpers.js";
//import { DrinkData } from "../types"; // Assuming you have a type definition file for TypeScript

const validCategories = ['Coffee', 'Tea', 'Chocolate', 'Soda'];

// Base ingredients organized by category
const baseIngredients: Record<string, string[]> = {
  Coffee: ["espresso", "milk", "sugar", "caramel", "whipped cream"],
  Tea: ["black tea", "green tea", "mint", "lemon", "honey"],
  Chocolate: ["banana", "strawberry", "yogurt", "milk", "honey"],
  Soda: ["cola", "lemon-lime", "root beer", "ginger ale", "orange"]
};

export const generateDrinkData = (type: string, category: string): DrinkData => {
  if (!validCategories.includes(category)) {
    throw new Error(`Invalid category: ${category}. Must be one of ${validCategories.join(", ")}`);
  }

  // Generate random drink data
  const generatedDrinkData: DrinkData = {
    type: type,
    size: faker.helpers.arrayElement(["medium", "large", "small"]),
    ingredients: faker.helpers.arrayElements(baseIngredients[category], faker.datatype.number({ min: 1, max: 5 })),
    price: faker.commerce.price(2, 10, 2, "$"),
    calories: faker.datatype.number({ min: 50, max: 500 }),
    category: category as 'Coffee' | 'Tea' | 'Chocolate' | 'Soda'
  };

  // Store the generated drink data asynchronously
  storeDrinkData(generatedDrinkData).catch(error => {
    console.error("Failed to store drink data:", error);
  });

  return generatedDrinkData;
};
