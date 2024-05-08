var btncolor=["red", "blue", "green", "yellow"];
var gamepattern=[];
var userclickedpattern=[];
var level=0;
var started=false;

$("#startbtn").click(function(){
    if(!started)
        $("#level-title").text("level "+level);

    setTimeout(function(){
         nextSequence();
    },1000);
      
       started = true;
})





function nextSequence(){
    userclickedpattern= [];
    level=level+1;
    $("#level-title").text("level " +level);
    
    var ran = Math.floor(Math.random()*4);
    var randomChosenColor = btncolor[ran];
    console.log(randomChosenColor);
   
    gamepattern.push(randomChosenColor);    
    
 $("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

 var audio =new Audio("sounds/"+randomChosenColor+".mp3");
 audio.play();
    

    }

    $(".btn").click(function(){
        var userchoice = $(this).attr("id");
        userclickedpattern.push(userchoice);
        console.log(userclickedpattern);

        var audio =new Audio("sounds/"+userchoice+".mp3");
        audio.play();
        
        $("#"+ userchoice).fadeIn(100).fadeOut(100).fadeIn(100);

        checkanswer(userclickedpattern.length - 1);
        


    });

    function checkanswer(currentlevel){
        if(gamepattern[currentlevel] === userclickedpattern[currentlevel])
            {
                console.log("success");

                if(gamepattern.length === userclickedpattern.length){

                   console.log("length success");
                    setTimeout(function(){
                        nextSequence();
                    },1000 );
                }
            }
            else{ 
            
                console.log("wrong");
                var name = "wrong";
                var audio = new Audio("sounds/"+name+".mp3");
                audio.play();
             
                $("body").addClass("game-over");
                
                setTimeout(function(){
                    $("body").removeClass("game-over");
                

                },200);

                $("#level-title").text("game Over tap start");

                 
                      startover();
                 
              

            }}

            function startover(){
                gamepattern=[];
                started = false;
                level= 0;
            }