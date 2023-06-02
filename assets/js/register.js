const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const pseudo = document.getElementById('pseudo').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vérification des critères du mot de passe
    if (!/[A-Z]/.test(password)) {
        console.log('Le mot de passe doit contenir au moins une lettre majuscule (Uppercase missing).');
        return;
    }

    if (!/[0-9]/.test(password)) {
        console.log('Le mot de passe doit contenir au moins un chiffre (Number missing).');
        return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
        console.log('Le mot de passe doit contenir au moins un caractère spécial (Special char missing).');
        return;
    }

    if (password.length < 16) {
        console.log('Le mot de passe est trop court, il doit contenir au moins 16 caractères (Too short, password must be at least 16 characters long).');
        return;
    }

    const requestBody = {
        pseudo,
        email,
        password
    };

    try {
        const response = await fetch('https://music.freefakeapi.io/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        if (response.ok) {
            // Enregistrement réussi, récupération du token et stockage dans le localStorage
            localStorage.setItem('token', data.token);
            console.log('Enregistrement réussi !');
            // Redirection vers la page de connexion
            window.location.href = 'accueil-jour.html';
        } else {
            // Affichage d'un message d'erreur en cas d'échec de l'enregistrement
            console.log('Erreur lors de l\'enregistrement : ' + data.error);
        }
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement : ', error);
    }
});
