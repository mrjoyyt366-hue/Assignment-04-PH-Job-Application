1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


   answer : 
    i. getElementById:
    getElementById is a JavaScript method used to select a single, specific element from  webpage by using  unique ID name. Its always return single element Object.
    syntax : document.getElementById('idName')

    ii. getElementsByClassName
    getElementsByClass is also a JavaScript method that used to select all elements that share a specific class.
    Its returns HTML Collection its an array-like list of elements.
    syntax : document.getElementsByClassName('className')

    iii. 3. querySelector & querySelectorAll 
    querySelector: Returns only the first element that matches.
    syntax : document.querySelector('h1');

    querySelectorAll: Returns all matching elements in a NodeList. its easier to use .forEach() method.
    syntax : document.querySelectorAll('.btn');

2. How do you create and insert a new element into the DOM?

   answer :Here is the process to create and insert a new element into the DOM 
        i. Create the Element
        First of all i need to create an element using  document.createElement() method . After that i will Add content and styles in that element. 
        
        for example : 
        // Create a new <div> element
        const newCard = document.createElement('div');

        // Add content and styles
        newCard.innerText = "This is a new job card!";
        newCard.classList.add('job-card', 'bg-blue-100');

        ii. Insert the Element
        append to where exactly i want to put that new created element.
        for example i want to put into the  'mainContainer'
        example :
        const mainContainer = document.getElementById('filter-job-cards');
        mainContainer.appendChild(newCard);  


3. What is Event Bubbling? And how does it work?

    answer :Event Bubbling is a way of handling events in the browser where an event (like a click) starts 
        from the specific element where i clicked and then "bubbles up" to its parents, grandparents, and so on, until it reaches the very top of the page.

       1.  How It Works :
        Suppose i have  a button inside a div, and that div is inside the body.

        example of the Bubbling:
        Document > Body > Div > Button

        If i click the Button:
          1. The browser first triggers the click event on the Button.
          2. Then, the event moves to the Div (the parent).
          3. Then, it moves to the Body.
          4. Finally, it reaches the Document.

       2. How to Stop It?
        If i don't want the event to go to the parent. In that case, i use a  
        special method called event.stopPropagation(). it will stop the bubbling


4. What is Event Delegation in JavaScript? Why is it useful?

    answer :Event Delegation is a technique in JavaScript where i can attach a single event listener to a parent 
        element instead of adding multiple listeners to each individual child element.

        Why is it useful?
          1. Better Performance 
            If i have a list of 1,000 items, adding 1,000 event listeners will slow down the browser and consume a lot of memory. With event delegation, it only use one listener, which is much lighter

          2. Works with Dynamic Elements
             This is the most important reason for for the project. If i add a new job card to my list via JavaScript after the page has loaded, a normal event listener won't work on it. But because the parent is already listening, it will automatically handle clicks on any newly added children

          3. Cleaner Code
            It makes your code easier to manage because all the logic for a group of elements is in one place.

5. What is the difference between preventDefault() and stopPropagation() methods?


    answer : While both methods are used to control how events behave in JavaScript.
       Here is some difference between preventDefault() stopPropagation() methods:

       i.preventDefault() method:
          1. preventDefault() methods main Goal	to stop the Browser's default action.
          2. its use Validating forms or custom link behavior.
          3. for example example Stopping a page refresh on form submit.

        ii. stopPropagation() method :
          1. stopPropagation() methods to stop the Event from bubbling up.
          2. it use stopping a child click from triggering a parent's click.
          3. for example Clicking a 'Delete' button without opening the whole 'Card'.
        
       