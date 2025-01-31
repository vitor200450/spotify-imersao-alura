const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");
const loadingSpinner = document.getElementById("loading-spinner");

document.addEventListener(
    "input",
    debounce(() => {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm === "") {
            resultPlaylist.classList.add("hidden");
            resultArtist.classList.remove("hidden");
            return;
        }

        loadingSpinner.classList.remove("hidden");
        requestApi(searchTerm);
    }, 300)
);

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            displayResults(result);
            loadingSpinner.classList.add("hidden");
        })
        .catch((err) => {
            console.log(err);
            loadingSpinner.classList.add("hidden");
        });
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden");
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";

    result.forEach((element) => {
        const card = createCard(element);
        gridContainer.appendChild(card);
    });

    resultArtist.classList.remove("hidden");
}

function createCard(artist) {
    const artistCard = document.createElement("div");
    artistCard.classList.add("artist-card");

    artistCard.innerHTML = `<div class="card-img">
                                <img src=${artist.urlImg} alt=${artist.name} id="artist-img" class="artist-img" />
                                <div class="play">
                                    <span
                                        class="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div class="card-text">
                                <a
                                    title="${artist.name}"
                                    class="vst"
                                    href=""></a>
                                <span
                                    class="artist-name"
                                    id="artist-name">${artist.name}</span>
                                <span class="artist-categorie">
                                    ${artist.genre}
                                </span>
                            </div>`;
    return artistCard;
}

function debounce(func, delay) {
    let timeout = null;
    return () => {
        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            func();
        }, delay);
    };
}
