// Import stylesheets
import './style.css';

// Write Javascript code!
let name = 'Google';
let appDiv = document.getElementById('app');
appDiv.innerHTML = `
  <div id="square" class="defCard">&nbsp
  <div id="circle" class="card">&nbsp
  </div>
  </div>
`;

const square = document.querySelector('#square');
//square.addEventListener('click', match);

let circle = document.querySelector('.card');
circle.addEventListener('click', match);

function match() {
  circle.innerHTML = 'O';
}
