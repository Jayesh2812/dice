
function myfun(){
    var x=document.getElementById("dice");
    a=Math.floor(Math.random() * 6)+1;
    document.getElementById("dice").innerHTML = a;
    x.classList.toggle="dice";
}
function theme(){
        var element = document.getElementById("body");
        element.classList.toggle("body");
    
}