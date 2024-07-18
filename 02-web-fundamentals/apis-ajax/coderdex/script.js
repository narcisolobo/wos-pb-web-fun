/* 
  PSEUDOCODE:

  1. username is entered
  2. get username (value of the text input)
  3. when button is pressed make a get request to github api using username
  4. parse json response, cherry pick necessary info
  5. inject info into new card
  6. render card onto page
*/

// single responsibility principle

const usernameForm = document.getElementById('username-form');
usernameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  getCoder();
});

async function getCoder() {
  const username = getUsername();
  console.log(username);
  const data = await requestGithubAPI(username);
  const card = createCoderCard(data);
  injectCoderCard(card);
}

function getUsername() {
  const usernameInput = document.getElementById('username');
  const username = usernameInput.value;
  usernameInput.value = '';
  return username;
}

/**
 *
 * @param {string} username
 */
async function requestGithubAPI(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

function createCoderCard(data) {
  const coderCard = `
<div class="card glass light" id="${data.id}">
  <img src="${data.avatar_url}" alt="${data.login} profile pic" />
  <div class="card-body">
    <div class="flex flex-start mb">
      <div class="flex-1">
        <h2 class="coder-name">${data.name}</h2>
        <a href="${data.url}" target="_blank">Github Profile</a>
      </div>
    </div>
    <p><strong>Location: </strong> ${data.location}</p>
    <p><strong>Repositories: </strong> ${data.public_repos}</p>
    <p><strong>Followers: </strong> ${data.followers}</p>
  </div>
  <div class="card-footer flex flex-end">
    <button class="btn btn-danger" onclick="deleteCard(${data.id})">DELETE</button>
  </div>
</div>
`;

  return coderCard;
}

function injectCoderCard(card) {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML += card;
}

function deleteCard(id) {
  const card = document.getElementById(id);
  card.remove();
}
