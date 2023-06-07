// AFFICHAGE DE LA FENÊTRE DIALOGUE AU CLIC sur .dotLink
document.querySelector('.dotLink').addEventListener('click', function () {
    var bottomSheet = document.getElementById('bottomSheet');

    // var LicensebottomSheet = document.querySelector('.licenceBottomSheet');
    // var licenseOverlay = document.getElementById('licenseOverlay');

    // LicensebottomSheet.style.display ="none";
    // licenseOverlay.style.display ="none";
    
    bottomSheet.classList.toggle('open');
    var overlay = document.getElementById('overlay');
    overlay.classList.toggle('hideShowOverlay');
});

// AFFICHAGE DE LA FENÊTRE DIALOGUE AU CLIC sur Licence/Source
document.querySelector('.trackLicense').addEventListener('click', function () {
    var LicensebottomSheet = document.querySelector('.licenceBottomSheet');
    LicensebottomSheet.classList.toggle('open');
    var licenseOverlay = document.getElementById('licenseOverlay');
    licenseOverlay.classList.toggle('hideShowOverlay');
});

// DISPARITION DE LA FENÊTRE DIALOGUE AU CLIC SUR .overlay
document.querySelector('.overlay').addEventListener('click', function () {
    bottomSheet.classList.toggle('open');
    var overlay = document.getElementById('overlay');
    overlay.classList.toggle('hideShowOverlay');
});

// DISPARITION DE LA FENÊTRE DIALOGUE AU CLIC SUR .licenseOverlay
document.getElementById('licenseOverlay').addEventListener('click', function () {
    var LicensebottomSheet = document.querySelector('.licenceBottomSheet');
    LicensebottomSheet.classList.toggle('open');
    var licenseOverlay = document.getElementById('licenseOverlay');
    licenseOverlay.classList.toggle('hideShowOverlay');
});
