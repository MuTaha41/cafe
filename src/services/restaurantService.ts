import { faker } from "@faker-js/faker";

export const generateRandomRestaurantData = (): RestaurantData =>
 {
  const generatedRestaurantData: RestaurantData = {
    name: faker.company.name(),
    address: faker.address.streetAddress(),
    cuisine: faker.helpers.arrayElement(['Italian', 'Indian', 'Chinese', 'Mexican', 'American']), // Corrected usage
    rating: faker.datatype.float({ min: 0, max: 5, precision: 0.1 }),
    isOpen: faker.datatype.boolean(),
  };

  return generatedRestaurantData;
};

