// You can throw exceptions using the throw statement and handle them using the try...catch & finally statements.

// syntax:
throw expression;

// e.g:
throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
  toString() {
    return "I'm an object!";
  },
};

// syntax:
try {
  // Runs code that might cause an error or exception
  throw "myException"; // generates an exception
} catch (exception) {
  //Handles the exception if one occurs in the try block
  statements;
  console.error(exception);
} finally {
  //Runs after try and catch, whether an exception occurs or not / OPTIONAL TO USE OR NOT
  statements;
}

// e.g:
try {
  // statements to try
  let result = 10 / 0;
  throw new Error("An error occurred");
} catch (err) {
  // statements to handle the error,
  //   console.error(err.name);    // 'Error'
  //   console.error(err.message); // 'The message', or a JavaScript error message
  console.log(err);
} finally {
  // statements to execute regardless of whether an exception occurred or not
  console.log("This always runs");
}
