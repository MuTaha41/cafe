import { faker } from "@faker-js/faker";

export const generatePizzaFoodData = (): FoodData => {
  // Generate random weather data
  const generatedFoodData = {
    city: "Pizza",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedFoodData;
};

export const generateSuzziFoodData = (): FoodData => {
  // Generate random weather data
  const generatedFoodData: FoodData = {
    city: "Suzzi",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedFoodData;
};
