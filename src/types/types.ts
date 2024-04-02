// // Define the PizzaData interface
// interface PizzaData {
//   type: string;        // e.g., "Margherita", "Pepperoni"
//   size: string;        // e.g., "small", "medium", "large"
//   toppings: string[];  // e.g., ["mushrooms", "onions"]
//   price: string;       // e.g., "$9.99"
// }

// src/types/types.ts

export interface FoodData {
  type: string;
  size: string;
  toppings: string[];
  price: string;
}

