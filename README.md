# client-side-apis
Client-side web API || MDN active learning repo

Useful resources:

MDNs API Index Page
https://developer.mozilla.org/en-US/docs/Web/API


## Intro

- Application Programming Interfaces (APIs) are constructs in programming languages that allow developers to create complex functionality more easily. 

- Usually written in high-level languages like JavaScript and Python. Much easier to handle than directly writing low-level code (in C or C++) that directly controls the computer's GPU/graphics functions.

## APIs in client-side JS

- Lots of APIs available; not part of the JS language itself, rather they are built on top of core language, providing additional features to use within the language. 

- They generally fall into two categories:
  1. Browser APIs [Web Audio API] - built into the web browser and are able to expose data from the browser/surrounding computer environment and do useful complex things with it. 
  2. Third-party APIs [Twitter API] -  are not built into the browser by default and generally have to retrieve their information from somewhere. 

## R/s between JS, APIs, and other JS tools

- JS: high-lvl scripting language builtinto browsers that allows you to implement functionality on web pages. Also available in other programming environments like Node.js.

- Browser APIs -  constructs built into the browsers that sits on top of the JS language and allows you to implement functionality more easily. 

- 3rd-party APIs - constructs built into 3rd party platforms (Twitter, Facebook) that allow you to use some of those platform's functionality in your own web pages. 

- JS Libraries [jQuery, Mootools and React] - JS files containing custom functions that you can attach to your web page to speed up or enable writing common functionality. 

- JS Frameworks - Packages of HTML, CSS, JS and other tech that you install and then use to write an entire web application from scratch. 
  1. The key difference between a library and a framework is "Inversion of Control". When calling a method from a library, the developer is in control. With a framework, the control is inverted: the framework calls the developer's code.

## What can APIs do?

- Manipulate documents loaded into the browser. 
- Fetch data from server to update sections of the webpage. 
- Draw/manipulate graphics. Manipulate multimedia.
- Device APIs enabling you to interact with device hardware. 
- Client-side storage APIs enable us to store data, allowing us to create an app that will save its state.
- Various 3rd-party API functions...

## How do APIs work?

### They are object-based

- Your code interacts with APIs using one/more JS objects. Objects serve as containers for the data the API uses (contained in obj properties), and the functionality the API makes available (contained in obj methods).
 1. https://codepen.io/_Recurs1ion/pen/MWBJoLZ?editors=1100 [Web Audio API example]

### They have recognisable entry points. 
- The entry point is usually an object, stored in a variable, that needs to be used to do things with the API.
 1. For the Web Audio API, the entry point is the AudioContext object.
 2. For the DOM API, it is the Document object. 

### They use events to handle changes in state. 

### They have additional security mechanism where appropriate.

 - Subject to same-origin policy | other similar security considerations employed in the JS language and other web technologies. [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).
 
## Manipulating documents (DOM API)

Useful Rsrc = [Live DOM Viewer] (https://software.hixie.ch/utilities/js/live-dom-viewer/)

- DOM nodes; nodes can represent elements | attributes | text | etc. within HTML structure
[Node.nodeType](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType). 
The Node interface represents all nodes in a DOM. 

 * Nodes are also referred to by their position relative to other nodes:
  1. Root node
  2. Child node
  3. Descendant node: node *anywhere* inside another node
  4. Parent node: node which has another node inside it
  5. Sibling nodes: nodes that sit on the same lvl in the DOM tree

## Active Learning: Basic DOM Manipulation
  1. Selecting/appending/creating elements
     document.querySelector() | document.querySelectorAll() // older methods for grabbing element references. 
     document.createElement() | .appendChild() | .createTextNode()

  3. Moving/removing/adding elements
   - .appendChild() | .cloneNode() | 
   - .removeChild() 
   - .remove() /* not supported in older browsers */ use Node.parentNode.removeChild(childNode)

  4. Manipulating style and other properties
   - via HTMLElement.style
   - leveraging CSS properties directly, eitherly in <style></style> or its own stylesheet. 
   - Element.setAttribute() || takes two args, the attribute you want to set on element and the value you want to set it to. 
   - Note: *mixing CSS and JS is considered bad practice. Avoid inline styling. 
   [Codepen](https://codepen.io/_Recurs1ion/pen/WNKREJW?editors=0010)
   
## Active Learning: Dynamic Shopping List  
  - [Pen](https://codepen.io/_Recurs1ion/pen/QWBdmgO?editors=1010)
  - Simple dynamic shopping list allow user to input, delete list items. Built manipulating elements via the DOM API. 

## Fetching data from the server || using the fetch() API
### Active Learning Notes
  - Useful (additional) resources:
    1. [In-depth guide to using fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
    2. [Reference page for JS promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
    3. [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
    4. [Server-side programming guide](https://developer.mozilla.org/en-US/docs/Learn/Server-side)

  - The main API here is the Fetch API. This enables JavaScript running in a page to make an HTTP request to a server to retrieve specific resources. When the server provides them, the JavaScript can use the data to update the page, typically by using DOM manipulation APIs. The data requested is often JSON, which is a good format for transferring structured data, but can also be HTML or just text.
  
  - Example code to succesfully execute fetch requests via fetch() API / XMLHttpRequest in fetch-start.html
  
### The can store example
  - [Source code](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store)
  - Binary Large Object; large file-like objects, video files/images. We use the [.blob() method](https://developer.mozilla.org/en-US/docs/Web/API/Response/blob) of the Response object || returns a promise that resolves with a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob). 

## Third-party APIs
### They need to be connected to
- 3rd party APIs are located on 3rd party servers; they need to be connected to / made available on the page before you can use them. 
- You connect by linking a JS library available on the server. We put this in the script element. 
- You can then start using objects from that API library. 
### They require API keys
- You need to register for a developer key before you can use the API. 
- The key needs to be (assigned?)

#### Using the MapQuest API 
 - We connect API key by assigning it to L.mapquest.key 
 - We instantiate a map with:
```
const map = L.mapquest.map('map', {
  center: [34.6786, 33.0413],
  // change tileLayer to 'dark' from default 'map'/'hybrid'
  layers: L.mapquest.tileLayer('dark'),
  zoom: 12
});
```

- Example files in map-api directory. 


  
  
  
  
