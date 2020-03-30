
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

}
function mute(){
    var aud = document.getElementById("myAudio");
    console.log(aud.muted)
    if (aud.muted){
        aud.muted=false
    }
    else{
        aud.muted=true
    }
}