// syntax of querySelector
// const <variable_name> = document.querySelector("css-selector")

const title = document.querySelector('h1');
console.log(title.textContent);

title.textContent = 'WOW SO COOL';

title.style.color = 'blue';

// event attribute listeners
// to call functions

function changeIntroText() {
  const introParagraph = document.querySelector('#intro');
  // console.log(introParagraph);
  introParagraph.textContent = 'This has been changed!';
}

/**
 * This changes the button's background color
 * to yellow.
 * @param {HTMLButtonElement} element
 */
function highlightButton(element) {
  element.style.backgroundColor = 'yellow';
}

/**
 *
 * @param {string} id
 */
function incrementBoops(id) {
  console.log(id);
  const boopSpan = document.getElementById(id);
  // console.log(boopSpan);
  boopSpan.textContent++;
}
