on# Instructions

1. Define an IIFE to avoid creating global variables.
2. Define an array to hold results, and an index to maintain for last recalled result (lastRecalled) initialized to 0.
2. Define a function onNumberPress() that is invoked on click of number buttons (".btn-number"). It reads the number (text within the button), and appends it to the display input's (".display") value.
3. Define a function onOperatorPress() that is invoked on click of operator buttons (".btn-op"). It reads the operator (text within the button), and appends it to the display input's value. But before doing so it checks if the last character displayed  is an operator (an operator cannot be followed by another operator).
3. Define a function onCancelPress() that is invoked on click of cancel button (".btn-cancel"). It clears the display and resets  lastRecalled to last index of results array (so that a future recall button press will start recall with latest results).
4. Define a function onEvalPress() that is invoked on click of evaluate button, i.e. the = button (".btn-eval"). It reads the display value and evaluates it using JavaScript's eval() function, and shows the result in the display. It also saves the result to the results array. Set lastRecalled to last index of results array.
5. Define a function onRecallPress() that is invoked on click of recall button (".btn-recall"). It decrements lastRecalled value, gets the value of results at lastRecalled index and sets the display to that value.