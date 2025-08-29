// initial content
const startButton = document.getElementById("start");
const exitButton = document.querySelector(".exit");
const containers = document.querySelectorAll([".initial-content",".container",".result-content"]);
startButton.onclick = function(){
    containers[0].style.display = 'none';
    containers[1].style.display = 'block';
}
exitButton.onclick = function(){
    window.close();
}
// result-content
const repeated = document.getElementById("repeated");
repeated.onclick = function(){
    location.reload();
}