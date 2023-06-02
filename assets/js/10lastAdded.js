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

                tracksContainer.appendChild(coverElement);
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
                    coverElement.src = "https://music.freefakeapi.io/" + track.cover;

                    recentlyPlayedContainer.appendChild(coverElement);
                    
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