// dom methods

// (a)Document and Elements
// 1. get methods
var byId = document.getElementById('dom_js_id');
console.log('html element with that id', byId); // we get the element by id
var byClass = document.getElementsByClassName('dom_js_class');
console.log('html collection with that class ', byClass) // we get html collection list of elements with same class 
//check how many tags/classes by length of html collection
var pTag = document.getElementsByTagName("p"); // we get the element by tag name
console.log('html collection of  p tags', pTag);
console.log('no of p tags', pTag.length); // no of ptags in collection is length of collection
console.log('one of p tag among them,by index', pTag.item(0)); //get ptag by index
console.log('one of p tag among them,by id', pTag.namedItem('third_p')); //get ptag by id using namedItem
console.log('one of p tag among them,by name', pTag.namedItem('fourth_p')); //get ptag by name using namedItem

// 2.query methods
//query selector is most powerful way of accessing dom elements
var byQuery = document.querySelector('#dom_js_id');
console.log('get html by id', byQuery)
// difference between getElementById and querySelector
var difference = document.querySelector('div.dom_js_class') //we can use like css selector to access dom elements
console.log('difference between getElementById and querySelector', difference);
var byQueryAll = document.querySelectorAll('div#dom_js_id p');
console.log('query to select all p tags', byQueryAll);
//query selector all gives node list and getElementsbytagname etc gives html collection






//NodeList can contain any node type and childnodes , the HTMLCollection is going to only to contain any node Element children

// 3.create ,add,replace and remove methods
var div = document.createElement("div");
var div2 = document.createElement("div");
byQuery.appendChild(div); //inspect to check div added or not
byQuery.removeChild(document.querySelector('div.dom_js_class h1')); //inspect to check h1 removed or not
byQuery.replaceChild(div2, document.querySelector("div.dom_js_class h2"));

// 4. changing methods
var para=document.createElement('p');
para.innerHTML='<strong>inner html added</strong>'; // adds html to be displayed inside node
para.setAttribute('id','new_id_demo'); // sets  id attribute to created element
para.setAttribute('class','new_id_demo'); // sets  id attribute to created element
byQuery.appendChild(para);
para.id = 'changed_id'; // the id gets changed
para.style.color="red"; // access style of dom element easily

//(b) Nodes

// 1.Root nodes 
var body=document.body;
console.log('get enitre body tag',body.innerHTML); // access body tag
var entireFile=document.documentElement;
console.log('get enitre document ',entireFile.innerHTML); // access entire document

//2.child Nodes
var getDiv=document.getElementById('node_js_id');
console.log("show all child nodes ",getDiv.childNodes);//shows all child nodes in it
console.log('check value of nodes',getDiv.childNodes[0].nodeValue)