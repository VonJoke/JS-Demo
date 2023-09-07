// Import stylesheets
import './style.css';

// Write Javascript code!
const matchingGame = document.getElementById('match');
matchingGame.innerHTML = `
  <div class="card">&nbsp</div>
`;

let card = document.querySelector('card');
card.addEventListener('toggle', flip);

function flip() {
  card.style.backgroundColor = red;
}
