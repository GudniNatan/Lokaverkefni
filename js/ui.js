function myFunction() {
    var p = document.getElementById("shownav");
    var style = p.currentStyle || window.getComputedStyle(p);

    if (style.marginTop == "0px") {
       document.getElementById("menuLink").href = "#";
    }
    else{
        document.getElementById("menuLink").href = "#shownav";
    }
}