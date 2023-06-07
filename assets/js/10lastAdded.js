const token = localStorage.getItem('token'); // Récupérer le token depuis le localStorage

fetch('https://music.freefakeapi.io/api/tracks?order=latest&limit=10', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}` // Inclure le token d'authentification dans l'en-tête
    }
})
    .then(response => response.json())
    .then(data => {
        const tracksContainer = document.getElementById('tracks-container');

        if (Array.isArray(data)) {
            data.forEach(track => {

                const coverElement = document.createElement('img');
                coverElement.classList.add('cover-accueil');
                coverElement.src = "https://music.freefakeapi.io/" + track.cover;
                coverElement.setAttribute("data-id", track.id);
                tracksContainer.appendChild(coverElement);

                coverElement.addEventListener("click", function () {
                    console.log(this.dataset.id)
                    localStorage.idMusic = this.dataset.id;
                    window.location.href = "audioPlayer.html"
                })
            });
        } else {
            console.log('Les données renvoyées ne sont pas au format attendu.');
        }
    })
    .catch(error => {
        console.log('Une erreur s\'est produite lors de la récupération des morceaux :', error);
    });




// Fonction pour récupérer les 8 derniers morceaux écoutés
function fetchRecentlyPlayed() {
    fetch('https://music.freefakeapi.io/api/tracks?order=played', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}` // Inclure le token d'authentification dans l'en-tête
        }
    })
        .then(response => response.json())
        .then(data => {
            const recentlyPlayedContainer = document.getElementById('recently-played-container');

            if (Array.isArray(data)) {
                data.forEach(track => {

                    const coverElement = document.createElement('img');
                    coverElement.classList.add('cover-accueil');
                    coverElement.classList.add('scroll-cover-accueil');
                    coverElement.setAttribute("data-id", track.id);

                    coverElement.src = "https://music.freefakeapi.io/" + track.cover;

                    recentlyPlayedContainer.appendChild(coverElement);

                    coverElement.addEventListener("click", function () {
                        console.log(this)

                        localStorage.idMusic = this.dataset.id;
                        window.location.href = "audioPlayer.html"
                    })

                });
            } else {
                console.log('Les données renvoyées ne sont pas au format attendu.');
            }
        })
        .catch(error => {
            console.log('Une erreur s\'est produite lors de la récupération des morceaux écoutés :', error);
        });
}

// Appeler la fonction pour récupérer les 8 derniers morceaux écoutés
fetchRecentlyPlayed();

function toggleImage(imageId) {
    var image = document.getElementById(imageId);
    image.classList.toggle("hidden");
    var footer = document.querySelector(".footer");
    if (footer.querySelectorAll(".image.hidden").length > 0) {
        footer.classList.remove("show");
    } else {
        footer.classList.add("show");
    }
}


// MODAL LOGIN FORM
var personCircle = document.querySelector('.personcircle');
var modal = document.getElementById('modal');
var registerModal = document.getElementById('registerModal');
var registerLink = document.getElementById('register-link');
var modalContent = document.getElementById('modal-content');

personCircle.addEventListener('click', function () {

    modal.style.display = 'block';

});

registerLink.addEventListener('click', function (event) {

    registerModal.style.display = 'block';

});





