console.log("It's working yay!");

// Dropdown bar
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/* If you click outside of the dropdown */
window.onclick = function(event) {
    if (!event.target.matches('.dropbutton')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;

        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}