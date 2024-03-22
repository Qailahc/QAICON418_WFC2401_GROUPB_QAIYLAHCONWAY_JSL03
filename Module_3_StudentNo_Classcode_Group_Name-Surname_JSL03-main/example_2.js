// Declaritive Paradigm 
// In declarative programming, the emphasis is on what needs to be accomplished. The programmer describes the desired outcome without specifying the exact sequence of steps.

// Characteristics of Declarative Paradigm in the Code:
// Descriptive Logic: The code defines a cooking process using an array of steps. Each step is described in terms of its purpose (e.g., “Preheat grill,” “Season steak,” etc.) rather than detailing how to perform it.
// Minimal Control Flow: Instead of explicitly managing loops or conditional statements, the code relies on the for...of loop to iterate through the cooking process.
// Immutable Variable: The constants grillTemperatureCelsius and seasoning remain unchanged throughout execution. There are no reassignments or mutable variables.



function cookSteak(steakWeight, desiredDoneness) {
    const grillTemperatureCelsius = 204; 
    const seasoning = 'Salt and Pepper';
  
    // Define the cooking process
    const cookingProcess = [                                              // array - defined by squared brackets 
      { action: 'Preheat grill', temperature: grillTemperatureCelsius },  // Each step is an object with properties
      { action: 'Season steak', seasoning },
      { action: 'Cook steak until desired doneness', desiredDoneness },
      { action: 'Serve steak' }
    ];
    // The use of data structures (arrays and objects) organizes the steps logically, making the code more maintainable and readable. 
  
    // Execute the cooking process
    for (const step of cookingProcess) {                            // for loop
      switch (step.action) {
        case 'Preheat grill':
          console.log(`Preheating grill to ${step.temperature}°C`); // Display temperature in Celsius
          break;
        case 'Season steak':
          console.log(`Seasoning the steak with ${step.seasoning}`);
          break;
        case 'Cook steak until desired doneness':
          console.log(`Cooking steak to ${step.desiredDoneness}°C`); // Display temperature in Celsius
          break;
        case 'Serve steak':
          console.log('Steak is ready to serve!');
          break;
        default:
          console.log('Invalid step in the cooking process.');
      }
    }
  }
  
  cookSteak(16, 63); // Cook a 16 oz steak to medium-rare (63°C)
  
  
  // Abstraction Layers:
  //- The code abstracts away the implementation details of each step
  //- It focuses on defining the high-level actions without specifying how they are carried out
  //- This approach allows flexibility and separation of concerns