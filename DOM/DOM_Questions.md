27. Create an HTML page with 3 paragraphs (give each a unique id). Now do the following by manipulating the DOM via JavaScript.
* Create a new paragraph with some text within, and add it before the first paragraph.
* Create a new paragraph with some text within, and add it to the end of the document body
* Print the HTML within the second paragraph to the console
* Replace the contents of the second paragraph with 2 spans, each with some text
* Print the id of the second paragraph
* Change the id of the second paragraph
* Set the name attribute for the second paragraph to some value. Use setAttribute() to do so.
* Set styles for the third paragraph and turn it to crimson color background with white colored text
* Define a class in CSS that sets a black border, small padding and olive colored text. Add the class to the last paragraph.

28. Create an HTML page with a paragraph, a form with text input (with minlength set to 8) and a submit button. Now do the following.
* Set up an event handler that shows an alert dialog with text of the paragraph when it is clicked
* Set up an event handler that turns the background color of the input to lightgreen when the number of characters within the input is 8 or more (this happens as the user types)
* Set up an event handler that prevents form submission when the submit button is clicked. It then checks to see if number of characters within the input is at least 8. If so, it submits the forms. Else, an appropriate error message is displayed below the input.

29. Create a Bootstrap-like panel component with a header and body. Give it appropriate styles using CSS.
* Set up an event handler so that the panel body toggles (opens/closes) when the header is clicked
* Add more such panels to your page and make sure clicking a panel's header toggles only that panel's body
* Create a function that accepts a panel DOM node and turns it into a toggleable panel
_Reference_: https://getbootstrap.com/docs/3.4/javascript/#collapse-example-accordion  

30. Create a page with 2 inputs (both accepting number), button, and a span (initially empty).
* When the button is clicked, the two numbers within the input are added and displayed inside the span
* Now add a dropdown (select input) with options +, -, *, / (default selection is +). When user select an option, the contents of the span change to reflect the result of the new operation.