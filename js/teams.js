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

const allComponents = [];

jsonData.teams.forEach(team => {
    const container = document.createElement('div');

    const teamName = document.createElement('h2');
    teamName.textContent = team.strTeam;

    const teamBadge = document.createElement('img');
    teamBadge.src = team.strTeamBadge;
    teamBadge.width = '200'
    
    const teamFoundationDate = document.createElement('span');
    teamFoundationDate.textContent = `Foundation: ${team.intFormedYear}`;

    const stadiumThumb = document.createElement('img');
    stadiumThumb.src = (team.strStadiumThumb != null) ? team.strStadiumThumb : '../assets/img/stadium.png';
    stadiumThumb.width = '100'
    
    const teamStadium = document.createElement('span');
    teamStadium.textContent = `Stadium: ${team.strStadium}`;

    const stadiumCapacity = document.createElement('span');
    stadiumCapacity.textContent = `Capacity: ${team.intStadiumCapacity}`;

    const teamDesciption = document.createElement('p');
    teamDesciption.textContent = team.strDescriptionEN;

    container.append(teamName, teamBadge, teamFoundationDate, teamDesciption, stadiumThumb, teamStadium, stadiumCapacity);
    allComponents.push(container);
    console.log(team.strTeam);
    
});


mainContainer.append(nav,...allComponents);

