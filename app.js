/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


// slide images
function scrolll() {
    var left = document.querySelector(".scroll-images");
    left.scrollBy(350, 0)
}

function scrollr() {
    var right = document.querySelector(".scroll-images");
    right.scrollBy(-350, 0)
}