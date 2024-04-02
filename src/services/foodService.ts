import { faker } from "@faker-js/faker";

export const generatePizzaFoodData = (): FoodData => {
  // Generate random pizza data
  const generatedFoodData: FoodData = {
    type: "Pizza",
    size: faker.helpers.arrayElement(["small", "medium", "large"]),
    toppings: faker.helpers.arrayElements(["cheese", "pepperoni", "mushrooms", "onions", "olives"], faker.datatype.number({ min: 1, max: 5 })),
    price: faker.commerce.price(5, 20, 2, "$"),
  };

  // Return pizza data
  return generatedFoodData;
};

export const generateSuzziFoodData = (): FoodData => {
  // Generate random suzzi (assuming it's a type of food) data
  const generatedFoodData: FoodData = {
    type: "Suzzi",
    size: faker.helpers.arrayElement(["small", "medium", "large"]),
    toppings: faker.helpers.arrayElements(["tomatoes", "lettuce", "cheese", "meat", "cucumbers"], faker.datatype.number({ min: 1, max: 5 })),
    price: faker.commerce.price(10, 30, 2, "$"),
  };

  // Return suzzi data
  return generatedFoodData;
};
