// Key Concepts:
// Call Stack: This is where your JavaScript code runs. Functions are placed here when they are called and removed once executed.
// Web APIs: These handle tasks like setTimeout, fetch, etc. Once a Web API task is completed, its callback is pushed to the Task Queue.
// Task Queue (Callback Queue): This is where functions (callbacks) wait to be executed after their Web API (like setTimeout or fetch) has finished.
// Event Loop: The Event Loop is responsible for continuously checking if the Call Stack is empty. If it's empty, the Event Loop moves the callback from the Task Queue to the Call Stack.
// Answer to your question:
// The Call Stack must first be emptied before any callback in the Task Queue is executed. So, if there are still lines of JavaScript code left in the Call Stack, those will execute first. Only when the Call Stack is empty will the Event Loop allow the callback from the Task Queue (which is ready) to be pushed onto the Call Stack and executed.

// In this specific scenario:

// The fetch and setTimeout callbacks are in the Task Queue.
// The remaining lines in the Call Stack will be executed first (like the console.log("End") in the example).
// Once the Call Stack is empty, the Event Loop will push the fetch and setTimeout callbacks (based on when they are ready) to the Call Stack for execution.
// Thus, the Call Stack will execute first, followed by the Task Queue.

//starvation can happen in microtask queue 