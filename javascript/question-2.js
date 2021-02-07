const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating/";

const resultsContainer = document.querySelector(".results");


async function getGames() {
    const response = await fetch(url);
    const arrayOfObjects = await response.json();

    const games = arrayOfObjects.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i <= games.length; i++) {

        if (i === 8) {
            break;
        }

        console.log(games[i].name);
        console.log(games[i].rating);
        console.log(games[i].tags.length);

        resultsContainer.innerHTML += `<div class="results">Game: ${games[i].name}<br>
        Rating: ${games[i].rating}<br>
        Amount of tags: ${games[i].tags.length}</div > `
    }


}

getGames();