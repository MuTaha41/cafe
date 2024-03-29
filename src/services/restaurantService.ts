import { faker } from "@faker-js/faker";

//export const generateRandomRestaurantData = (): RestaurantData =>
export const getRestaurantsByCuisine = () =>
 {
  const generatedRestaurantData: RestaurantData = {
    name: faker.company.name(),
    address: faker.address.streetAddress(),
    cuisine: faker.helpers.arrayElement(['Italian', 'Indian', 'Chinese', 'Mexican', 'American']), // Corrected usage
    rating: faker.datatype.float({ min: 0, max: 5, precision: 0.1 }),
    isOpen: faker.datatype.boolean(),
  };

// Implementation of getRestaurantById
export const getRestaurantById = (id: string): Restaurant | undefined => {
  return restaurants.find(restaurant => restaurant.id === id);
};

  return generatedRestaurantData;
};

