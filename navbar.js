// Når brugeren scroller på siden, udfør myFunction
window.onscroll = function() {myFunction()};

// Linker til navbar
let navbar = document.getElementById("navbar");

// Linker til offset position af navbar
let sticky = navbar.offsetTop;

// Tilføjer "sticky" til navbar når man når til scroll positionen. Fjerner "sticky" når man forlader scroll positionen
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
