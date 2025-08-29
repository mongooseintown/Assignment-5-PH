<h1>What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h1>
<p>Answer:</p>
<p>getElementById picks one element by its unique ID. We can easily get the exact element and can change it.
getElementsByClassName picks all elements that have a certain class. It gives a collection of elements, so we can easily loop through them.
querySelector picks the first element that matches a CSS selector. As its very much flexible, we can use class or id or tag to get the element.
querySelectorAll picks all elements that match a CSS selector. We can easily loop through them to make changes of elements contents style etc.</p>
<hr>
How do you create and insert a new element into the DOM?
Answer:
We create the element using document.createElement() method. Then we can insert the element into the DOM using many methods like appendChild() or insertBefore() etc.
<hr>
What is Event Bubbling and how does it work?
Answer:
Event bubbling is when an event starts on a child element and then bubbles up to its parent elements. It works as like when someone clicks a button inside a div, the click event goes to the button first, then the div, then the body and so on.
<hr>
What is Event Delegation in JavaScript? Why is it useful?
Answer:
Event delegation is when we attach an event to a parent element instead of each child. Then, inside the event, we check which child triggered it. This is useful because we don’t need to add events to every element, especially if new elements are added later.
<hr>
What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault() stops the default action of an element. Example: clicking a link won’t go to another page.
stopPropagation() stops the event from bubbling up to parent elements. Example: clicking a button won’t trigger the parent’s click event.
