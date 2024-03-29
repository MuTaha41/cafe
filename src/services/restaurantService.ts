// import { faker } from "@faker-js/faker";
// import { storeRestaurantData } from "../helpers/helpers.js"; // This function needs to be implemented

// export const generateRandomRestaurantData = (): RestaurantData => {
//   // Generate random restaurant data
//   const generatedRestaurantData: RestaurantData = {
//     name: faker.company.name(),
//     address: faker.address.streetAddress(),
//     cuisine: faker.random.arrayElement(['Italian', 'Indian', 'Chinese', 'Mexican', 'American']),
//     rating: faker.datatype.float({ min: 0, max: 5, precision: 0.1 }),
//     isOpen: faker.datatype.boolean(),
//   };

//   storeRestaurantData(generatedRestaurantData).catch(console.error);

//   // Return restaurant data
//   return generatedRestaurantData;
// };

import { faker } from "@faker-js/faker";

export const generateRandomRestaurantData = (): RestaurantData => {
  const generatedRestaurantData: RestaurantData = {
    name: faker.company.name(),
    address: faker.address.streetAddress(),
    cuisine: faker.helpers.arrayElement(['Italian', 'Indian', 'Chinese', 'Mexican', 'American']), // Corrected usage
    rating: faker.datatype.float({ min: 0, max: 5, precision: 0.1 }),
    isOpen: faker.datatype.boolean(),
  };

  return generatedRestaurantData;
};

