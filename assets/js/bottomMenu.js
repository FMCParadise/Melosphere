// AFFICHAGE DE LA FENÊTRE DIALOGUE AU CLIC sur .dotLink
document.querySelector('.dotLink').addEventListener('click', function () {
    var bottomSheet = document.getElementById('bottomSheet');
    bottomSheet.classList.toggle('open');
    var overlay = document.getElementById('overlay');
    overlay.classList.toggle('hideShowOverlay');
});

// DISPARITION DE LA FENÊTRE DIALOGUE AU CLIC SUR .overlay
document.querySelector('.overlay').addEventListener('click', function () {
    var bottomSheet = document.getElementById('bottomSheet');
    bottomSheet.classList.toggle('open');
    var overlay = document.getElementById('overlay');
    overlay.classList.toggle('hideShowOverlay');
});