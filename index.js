var buttonclr=["red", "green", "blue", "yellow"];
var gamepattern=[];
var userclickedpattern=[];
var started=false;

var level=0;
$(document).keypress(function()
{
if (!started){
    $("#level-title").text("level "+level);
    nextSequence();
    started=true;
}
});

function checkanswer(currentlevel){
    if (gamepattern[currentlevel] === userclickedpattern[currentlevel])
    {
      console.log("success");
      
      
    if(gamepattern.length ===userclickedpattern.length){
        setTimeout(function(){
            nextSequence();
        }, 1000);

    }
    else{
     console.log("wrong");
     playSound("wrong");

     $("body").addClass("game-over");
     setTimeout(function(){
        $("body").removeClass("game-over");
     },200);

     $("#level-title").text("Game over, press any key to restart");

     startover();
    }


}

$(".btn").click(function(){
var userchosencolor =$(this).attr("id");

userclickedpattern.push(userchosencolor);

console.log(userclickedpattern);

playSound(userchosencolor);
Animatepress(userchosencolor);
checkanswer(userclickedpattern.length-1);

});


function nextSequence()
{
    userclickedpattern=[];
    level++;
    $("#level-title").text("level "+level);

    var ran = Math.floor(Math.random()*4);
    var randomchose = buttonclr[ran];
    gamepattern.push(randomchose);

    $("#"+randomchose).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomchose);
    
  

}
function startover(){
     level=0
    gamepattern=[];
     started=false;
}
function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
    
}
function Animatepress(currentclr){
    $("#"+currentclr).addClass("pressed");
    setTimeout(function(){
        $("#"+currentclr).removeClass("pressed");

    },100);
    


}}