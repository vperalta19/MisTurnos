// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyHeader()};

// Get the navbar
var navbar = document.getElementById("main-header");
var pedirTurno = document.getElementById("pedirTurno");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky"); 
        pedirTurno.classList.add("d-none");
        pedirTurno.classList.add("d-lg-block");
        medio.classList.add("margen");
    } else {
        navbar.classList.remove("sticky");
        pedirTurno.classList.remove("d-none");
        medio.classList.remove("margen");
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
