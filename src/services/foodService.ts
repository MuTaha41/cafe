// Importing faker
import { faker } from "@faker-js/faker";

// Assuming PizzaData is defined elsewhere in your project
import { PizzaData } from './path_to_your_PizzaData_definition'; // Adjust the path as necessary

export const generatePizzaData = (): PizzaData => {
  const generatedPizzaData: PizzaData = {
    type: faker.helpers.arrayElement(["Margherita", "Pepperoni", "Hawaiian", "Veggie"]),
    size: faker.helpers.arrayElement(["small", "medium", "large"]),
    toppings: faker.helpers.arrayElements([
      "mushrooms", "peppers", "onions", "sausages", "bacon", "extra cheese"
    ], faker.datatype.number({ min: 1, max: 5 })),
    price: faker.commerce.price(5, 20, 2, "$")
  };

  return generatedPizzaData;
};
