// const baseUrl = 'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=';
const baseUrlLeagues = 'https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=';
const baseUrlTeams = 'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=';
const countryInput = document.getElementById('search-by-country');

const mainContainer = document.querySelector('#app');

const searchTeams = () => {
    window
        .fetch(`${baseUrlLeagues}${countryInput.value}`)
        .then(response => response.json())
        .then(responseJson => {
            const allItems = [];
            let soccerLeagues = responseJson.countries.filter(league => league.strSport === 'Soccer' && league.strGender === 'Male');
            console.log(soccerLeagues);


            soccerLeagues.reverse().forEach((item) => {
                const container = document.createElement('div');
                container.className = 'grid justify-items-center items-center bg-neutral-200 w-80 rounded-md shadow-xl mb-5'

                const leagueName = document.createElement('h1');
                leagueName.textContent = item.strLeague;
                leagueName.className = 'p-5 text-xl text-center font-bold text-blue-800'

                const leagueBadge = document.createElement('img');
                leagueBadge.src = item.strBadge;
                leagueBadge.width = '150';
                leagueBadge.className = 'm-2'

                const leagueFoundationDate = document.createElement('p');
                leagueFoundationDate.textContent = `Foundation: ${item.intFormedYear}`;
                leagueFoundationDate.className = 'text-sm font-bold text-neutral-400'

                const countryLeague = document.createElement('span');
                countryLeague.textContent = item.strCountry;
                countryLeague.className = 'text-sm font-bold text-neutral-400';

                leagueFoundationDate.append(' ~ ',countryLeague);

                const btnViewTeams = document.createElement('button');
                btnViewTeams.textContent = 'View teams';
                btnViewTeams.className = 'p-2 m-5 w-60 text-white text-xl font-medium rounded-md bg-slate-400 hover:bg-blue-400 shadow-md shadow-slate-500/80';
                btnViewTeams.setAttribute('id',item.strLeague);

                container.append(leagueName, leagueBadge, leagueFoundationDate, btnViewTeams);

                allItems.push(container);
            })


            mainContainer.append(...allItems);
            mainContainer.className = 'grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center bg-violet-100 p-3';            

            mainContainer.addEventListener('click',() => {
                if(event.target.nodeName === 'BUTTON'){               
                    const leagueTeam = event.target.id;
                    window
                        .fetch(`${baseUrlTeams}${leagueTeam}`)
                        .then(responseTeams => responseTeams.json())
                        .then(responseJsonTeams => {
                            localStorage.setItem('data',JSON.stringify(responseJsonTeams));
                            window.open(`../public/view/teams.html?league=${leagueTeam}`, '_self');                            
                        })
                        .catch(error => console.error(error))
                }
            });
        })
}

const searchButton = document.getElementById('search-btn');
searchButton.addEventListener("click", searchTeams);