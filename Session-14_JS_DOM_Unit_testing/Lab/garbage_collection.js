// Define a function that creates and returns an object
// https://code.visualstudio.com/docs/nodejs/profiling#_analyzing-a-profile
function createObject() {
  // Create a new object
  const object = { foo: "bar" };

  // Log a message to the console indicating that an object has been created
  console.log("Object created:", object);

  // Return the object
  return object;
}
console.profile();

// Call the createObject function to create a new object
var myObject = createObject();

// Set myObject to null, removing the reference to the object
myObject = null;

// Log a message to the console indicating that the reference has been removed
console.log("Object reference removed");

// Wait for a short period of time
setTimeout(() => {
  // At this point, the garbage collector may have run and removed the
  // unused object from memory
  console.log("Done waiting");
  console.profileEnd();
}, 1000);
console.log("Object reference removed");
