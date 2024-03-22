// Imperative Paradigm
// The imperative paradigm focuses on explicitly specifying how a program should execute through a sequence of statements. It emphasizes modifying the program's state using variables and instructions. 
// In imperative programming, you tell the computer how to accomplish a task step by step.

// Characteristics of Imperative Paradigm in the Code:
// Mutable Variables: The code uses variables like `grillTemperature`, `steakTemperature`, and `seasoning`. These variables can change their values during execution, which aligns with the imperative paradigm.
// Step-by-Step Instructions: Each step describes an action to be taken, such as preheating the grill, seasoning the steak, and cooking it.
// Looping and Conditionals: The `while` loop checks whether `steakTemperature` is less than `desiredDoneness`.
// - Inside the loop, the steak is grilled, and the temperature is adjusted based on `steakWeight` and `desiredDoneness`.
// - The loop continues until the steak reaches the desired doneness.
// - The `if` statement determines whether the steak is ready to serve or needs more cooking.


function cookSteak(steakWeight, desiredDoneness) {
    let grillTemperature = 0;     
    let steakTemperature = 0;
    // Variables like `grillTemperature` and `steakTemperature` track the state and progress of the cooking process
    
    // Step 1: Preheat the grill
    grillTemperature = 204;      // Mutable Variable
    
    // Step 2: Season the steak
    const seasoning = 'Salt and Pepper';
    // Apply seasoning to both sides of the steak
    
    // Step 3: Cook the steak
    while (steakTemperature < desiredDoneness) {
      // Grill the steak and measure internal temperature
      // Adjust grill temperature and cooking time based on steakWeight and desiredDoneness
      // Update steakTemperature
      
      // If the steak is done, break out of the loop
    }
    
    // Step 4: Serve the steak
    if (steakTemperature >= desiredDoneness) {
      return 'Steak is ready to serve!';
    } else {
      return 'Steak needs more cooking.';
    }
  }
  
  // Usage example:
  const result = cookSteak(16, 63); // Cook a 16 oz steak to medium-rare (63°C)
  console.log(result);
  