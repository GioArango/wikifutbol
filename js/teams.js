console.log('Hola desde teams.js');

// Get data of localstorage
const data = localStorage.getItem('data');
const jsonData = JSON.parse(data);
console.log(jsonData);
// Get league of url
const param = window.location.search;
const urlParam = new URLSearchParams(param);
const league = urlParam.get('league');
console.log(league);

const mainContainer = document.querySelector('#app-teams');

const nav = document.createElement('div');
nav.textContent = league;
nav.className = 'bg-gradient-to-r from-cyan-500 to-violet-500 font-bold';


mainContainer.append(nav);

