import { faker } from "@faker-js/faker";

export const generatePizzaData = (): PizzaData => {
  // Generate random pizza data
  const generatedPizzaData: PizzaData = {
    type: faker.random.arrayElement(["Margherita", "Pepperoni", "Hawaiian", "Veggie"]),
    size: faker.random.arrayElement(["small", "medium", "large"]),
    toppings: faker.random.arrayElements(
      ["mushrooms", "peppers", "onions", "sausages", "bacon", "extra cheese"],
      faker.datatype.number({ min: 1, max: 5 }) // Random number of toppings between 1 and 5
    ),
    price: faker.commerce.price(5, 20, 2, "$") // Random price between $5 and $20
  };

  // Return pizza data
  return generatedPizzaData;
};

// If you need another type of food data generation function, you can create one in a similar manner.
