var button1 = document.getElementById("Olivaw");
var button2 = document.getElementById("button2");
var content = document.getElementById("content");

// Fonction pour mettre à jour le lien et le contenu généré
function updateContent(link, generatedContent) {
  button1.setAttribute("onclick", `window.location.href='${link}'`);
  button2.setAttribute("onclick", `window.location.href='${link}'`);
  content.innerText = generatedContent;
}

// Écouteur d'événement pour le bouton 1
button1.addEventListener("click", function() {
  var link = "C:\Users\Stagiaire\Desktop\Melosphere.v1\liste-musique-artiste.html";
  var generatedContent = "Contenu généré par le bouton 1";
  updateContent(link, generatedContent);
});

// Écouteur d'événement pour le bouton 2
button2.addEventListener("click", function() {
  var link = "https://exemple.com/page2";
  var generatedContent = "Contenu généré par le bouton 2";
  updateContent(link, generatedContent);
});
