// use countup lib
$('.counter').countUp();
// change toggle icon
var btnToggleIcon = document.getElementById("btnToggleIcon");
var iconn = document.getElementById("iconn");
btnToggleIcon.onclick = function () {
    iconn.classList.toggle("fa-xmark");
    iconn.classList.toggle("fa-bars");
}