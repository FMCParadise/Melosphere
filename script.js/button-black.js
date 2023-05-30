var buttons = document.querySelectorAll(".border-button-cdc");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        buttons.forEach(function(btn) {
            btn.style.backgroundColor = "#F9B233";
            btn.style.color = "#333333"
             
        });

        this.style.backgroundColor = "#333333"; 
        this.style.color ="white";
    });
});
