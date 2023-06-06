// Menu icons
let homeBtn = document.querySelector("#home");
let searchBtn = document.querySelector("#search");
let heartBtn = document.querySelector("#fav");

// background panels 
let rightPanel = document.querySelector("#image1");
let middlePanel = document.querySelector("#image2");
let leftPanel = document.querySelector("#image3");

// leftPanel.style.display = "none";
// middlePanel.style.display = "none";
// rightPanel.style.display = "block";
// homeBtn.classList.add("top")


//bind event click on Menu icons (HOME ICON)
homeBtn.addEventListener("click", function () {
    homeBtn.classList.remove("top")
    heartBtn.classList.remove("top")
    searchBtn.classList.remove("top")
    homeBtn.classList.add("top")

    // menu background toggle display
    leftPanel.style.display = "none";
    middlePanel.style.display = "none";
    rightPanel.style.display = "block";

    // navigate to homePage
    window.location.href = "accueil-jour.html"
});


//bind event click on Menu icons (SEARCH ICON)
searchBtn.addEventListener("click", function () {
    searchBtn.classList.remove("top")
    heartBtn.classList.remove("top")
    searchBtn.classList.add("top")
    homeBtn.classList.remove("top")
    
    // menu background display toggle
    leftPanel.style.display = "none";
    rightPanel.style.display = "none";
    middlePanel.style.display = "block";

    // navigate to search page
    window.location.href = "#"
});


//bind event click on Menu icons (fav ICON)
heartBtn.addEventListener("click", function () {
    heartBtn.classList.remove("top")
    homeBtn.classList.remove("top")
    searchBtn.classList.remove("top")
    heartBtn.classList.add("top")

    // menu background display toggle    
    rightPanel.style.display = "none";
    middlePanel.style.display = "none";
    leftPanel.style.display = "block";

    // navigate to favorite Page
    window.location.href = "cdc-favoris-musique.html"
});