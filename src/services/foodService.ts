import { faker } from "@faker-js/faker";
import { storeFoodData } from "../helpers/helpers.js";

type Category = 'Vegetarian' | 'Vegan' | 'Seafood' | 'Regular';

const validCategories: Category[] = ['Vegetarian', 'Vegan', 'Seafood', 'Regular'];

export const generateFoodData = async (type: string, category: Category): Promise<FoodData> => {
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
    foodType: type,
    size: faker.helpers.arrayElement(["small", "medium", "large"]),
    toppings: faker.helpers.arrayElements(baseToppings[category], faker.number.int({ min: 1, max: 5 })),
    price: faker.commerce.price({ min: 5, max: 30, dec: 2, symbol: "$" }),
    calories: faker.number.int({ min: 250, max: 1200 }),
    category: category
  };

  try {
    await storeFoodData(generatedFoodData);
  } catch (error) {
    console.error("Failed to store food data:", error);
    throw new Error("Failed to store food data");
  }

  return generatedFoodData;
};




