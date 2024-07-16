function hide(element) {
  element.remove();
}

function addingUp(id) {
  // querySelector with concatenation
  // const span = document.querySelector('#' + id);

  // querySelector with template literal
  // const span = document.querySelector(`#${id}`);

  const span = document.getElementById(id);
  span.textContent++;
}

function alertSearch() {
  const searchInput = document.querySelector('#search');
  // concatenation example
  // alert('Searching for "' + searchInput.value + '"');

  // template literal example
  alert(`Searching for "${searchInput.value}"`);
}
