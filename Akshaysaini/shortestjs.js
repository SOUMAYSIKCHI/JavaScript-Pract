
// for revision kids 
// Notes:
// 	• window object is created by the JS engines of the respective browsers when global execution context is created.
// 	• whenever an execution context is created a "this" variable is also created.
// 	• at the global level "this" points to the global object( window object in case of browsers).
// 	• anything that is not inside a function is the "global space".
// 	• whenever we create any variables or functions in the "global space", they get attached to the global object( window object in case of browsers).
	
// 	so to access the variables/function defined in the global space , 
// 	we can use any of the below:
// 		console.log(window.a);
// 		console.log(a);
// 		console.log(this.a)             //at the global space level, where this points to the window object
