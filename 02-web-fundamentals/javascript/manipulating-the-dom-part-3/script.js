/**
 *
 * @param {HTMLImageElement} element
 */
function changeSpidey(element) {
  element.src = './images/spider-man.webp';
}

function alertFavoriteHero(element) {
  alert('You chose ' + element.value);
}

function handleChange(element) {
  console.log(element.value);
}

function alertEmail() {
  const emailInput = document.querySelector('#email');
  console.log(emailInput);
  alert(emailInput.value);
}
