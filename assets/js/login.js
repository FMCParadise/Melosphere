// Vérifier si la modal est affichée (exemple avec une classe CSS)
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const requestBody = {
            email,
            password
        };

        try {
            const response = await fetch('https://music.freefakeapi.io/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            const data = await response.json();

            if (response.ok) {
                // Connexion réussie, récupération du token et stockage dans le localStorage
                localStorage.setItem('token', data.token);
                console.log("Token d'accès: " + data.token);
                console.log('Connexion réussie !');
                // Redirection vers la page d'accueil
                window.location.href = 'accueil-jour.html';
            } else {
                // Affichage d'un message d'erreur en cas d'échec de la connexion
                console.log('Erreur lors de la connexion : ' + data.error);
            }
        } catch (error) {
            console.error('Erreur lors de la connexion : ', error);
        }
    });






