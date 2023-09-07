// Import stylesheets
import './style.css';

// Write Javascript code!
let name = 'Google';
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
  <h1>This is 
    <a id="googleLink" target="_blank" href="match/match.html"> ${name} </a>
  </h1>
`;

const googleLink = document.querySelector('h1');
googleLink.addEventListener('click', show);

function show() {
  alert('No');
}
