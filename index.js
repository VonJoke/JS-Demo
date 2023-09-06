// Import stylesheets
import './style.css';

// Write Javascript code!
let name = 'Google';
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
  <h1>This is 
    <a target="_blank" href="https://google.com"> ${name} </a>
  </h1>
`;
