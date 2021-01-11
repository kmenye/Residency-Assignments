// 1) Select the section with an id of container without using querySelector.
// document.getElementById('container');

// 2) Select the section with an id of container using querySelector.
// document.querySelector('container');

// 3) Select all of the list items with a class of "second".
// document.querySelectorAll('li.second');

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
// document.querySelector('ol li.third');

// 5) Give the section with an id of container the text "Hello!".
// let element = document.getElementById('container');
// element.innerHTML = 'hello';

// 6) Add the class main to the div with a class of footer.
// let element = document.querySelector('.footer');
// element.classList.add('main');

// 7) Remove the class main on the div with a class of footer.
// let element = document.querySelector('.footer');
// element.classList.remove('main');

// 8) Create a new li element.
// let newElement = document.createElement('LI');

// 9) Give the li the text "four".
// newElement.innerHTML = 'four';

// 10) Append the li to the ul element.
// let toAppend = document.querySelector('ul');
// toAppend.appendChild(newElement);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
//  elements = document.querySelectorAll('ol');
// 
// for (let i = 0; i < elements.length; i++) {
//     elements[i].style.backgroundColor = 'green';
// }

// 13) Remove the div with a class of footer.
// toRemove = document.getElementsByClassName('footer')[0];
// toRemove.remove();