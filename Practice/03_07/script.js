/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const apartment = {
  name: "Aquila's House",
  chairs: 4,
  rooms: 3,
  bathrooms: 2,
  kitchen: 1,
  refrigerators: 2,
  dinningFridge: {
    color: "white",
    decks: 2,
    size: "130 L",
    coolingSpeed: 30,
    eggTray: 18,
  },
};

console.log(apartment);
