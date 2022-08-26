// use countup lib
$('.counter').countUp();
// change toggle icon
var btnToggleIcon = document.getElementById("btnToggleIcon");
var iconn = document.getElementById("iconn");
btnToggleIcon.onclick = function () {
    iconn.classList.toggle("fa-xmark");
    iconn.classList.toggle("fa-bars");
}
// toggle theme
var body = document.getElementById("body");
var btnSwitchTheme = document.getElementById("btnSwitchTheme");
btnSwitchTheme.onclick = function () {
    body.classList.toggle("theme--dark");
}