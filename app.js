
function myfun(){
    a=Math.floor(Math.random() * 6)+1;
    document.getElementById("dice").innerHTML = a;
    var element = document.getElementById("dice");
    element.classList.toggle("x1");
    var x = document.getElementById("myAudio"); 
    
    x.play(); 
}
function theme(){
        var element = document.getElementById("body");
        element.classList.toggle("body");
        var element = document.getElementById("dice");
        element.style.color="rgb(49, 48, 48)";
}