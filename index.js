 var string = ["green", "red", "yellow", "blue"];
 var number = Math.floor(Math.random() * 4);
 var gamePattern = [];
 var userClickedPattern = [];

 var level = 0;

 var k = 1;

 $('#button').click(function() {
   var number = Math.floor(Math.random() * 4);
   $("h1").text("Level 1");
   $("#" + string[number]).fadeOut().fadeIn();
   var audio = new Audio("sounds/" + string[number] + ".mp3");
   audio.play();
   gamePattern.push("#" + string[number]);
   k = 1;
 });


 $("#green").click(function() {
   $("#green").fadeOut().fadeIn();
   var audio = new Audio("sounds/green.mp3");
   audio.play();
   k++;
   level++;
   userClickedPattern.push("#green");
   if (k > $("h1").text().charAt(6)) {
     $("h1").text("Level " + k);

     var intervalId = null;
     var varCounter = 0;
     var varName = function() {
       if (varCounter < $("h1").text().charAt(6)) {
         varCounter++;
         let number = Math.floor(Math.random() * 4);
         $("#" + string[number]).fadeOut().fadeIn();
         var audio = new Audio("sounds/" + string[number] + ".mp3");
         audio.play();
         gamePattern.push("#" + string[number]);

       } else {
         clearInterval(intervalId);
       }

     };

     $(document).ready(function() {
       intervalId = setInterval(varName, 1000);

     });

     k = 1;
   }
   if (gamePattern[level - 1] !== userClickedPattern[level - 1]) {
     $("h1").text("Oopps! This Level Seems To Be Hard For U.");
     var audio = new Audio("sounds/wrong.mp3");
     audio.play();
     $("body").addClass("game-over");
     setTimeout(function() {
       $("body").removeClass("game-over");
     }, 200);
     startOver();
   }
 });


 $("#blue").click(function() {
   $("#blue").fadeOut().fadeIn();
   var audio = new Audio("sounds/blue.mp3");
   audio.play();
   k++;
   level++;
   userClickedPattern.push("#blue");

   if (k > $("h1").text().charAt(6)) {
     $("h1").text("Level " + k);
     var intervalId = null;
     var varCounter = 0;
     var varName = function() {
       if (varCounter < $("h1").text().charAt(6)) {
         varCounter++;
         let number = Math.floor(Math.random() * 4);
         $("#" + string[number]).fadeOut().fadeIn();
         var audio = new Audio("sounds/" + string[number] + ".mp3");
         audio.play();
         gamePattern.push("#" + string[number]);

       } else {
         clearInterval(intervalId);
       }

     };

     $(document).ready(function() {
       intervalId = setInterval(varName, 1000);

     });

     k = 1;
   }
   if (gamePattern[level - 1] !== userClickedPattern[level - 1]) {
     $("h1").text("Oopps! This Level Seems To Be Hard For U.");
     var audio = new Audio("sounds/wrong.mp3");
     audio.play();
     $("body").addClass("game-over");
     setTimeout(function() {
       $("body").removeClass("game-over");
     }, 200);
     startOver();
   }
 });

 $("#red").click(function() {
   $("#red").fadeOut().fadeIn();
   var audio = new Audio("sounds/red.mp3");
   audio.play();
   k++;
   level++;
   userClickedPattern.push("#red");

   if (k > $("h1").text().charAt(6)) {
     $("h1").text("Level " + k);
     var intervalId = null;
     var varCounter = 0;
     var varName = function() {
       if (varCounter < $("h1").text().charAt(6)) {
         varCounter++;
         let number = Math.floor(Math.random() * 4);
         $("#" + string[number]).fadeOut().fadeIn();
         var audio = new Audio("sounds/" + string[number] + ".mp3");
         audio.play();
         gamePattern.push("#" + string[number]);

       } else {
         clearInterval(intervalId);
       }

     };

     $(document).ready(function() {
       intervalId = setInterval(varName, 1000);

     });

     k = 1;
   }
   if (gamePattern[level - 1] !== userClickedPattern[level - 1]) {
     $("h1").text("Oopps! This Level Seems To Be Hard For U.");
     var audio = new Audio("sounds/wrong.mp3");
     audio.play();
     $("body").addClass("game-over");
     setTimeout(function() {
       $("body").removeClass("game-over");
     }, 200);
     startOver();
   }
 });

 $("#yellow").click(function() {
   $("#yellow").fadeOut().fadeIn();
   var audio = new Audio("sounds/yellow.mp3");
   audio.play();
   k++;
   level++;
   userClickedPattern.push("#yellow");

   if (k > $("h1").text().charAt(6)) {
     $("h1").text("Level " + k);
     var intervalId = null;
     var varCounter = 0;
     var varName = function() {
       if (varCounter < $("h1").text().charAt(6)) {
         varCounter++;
         let number = Math.floor(Math.random() * 4);
         $("#" + string[number]).fadeOut().fadeIn();
         var audio = new Audio("sounds/" + string[number] + ".mp3");
         audio.play();
         gamePattern.push("#" + string[number]);

       } else {
         clearInterval(intervalId);
       }

     };

     $(document).ready(function() {
       intervalId = setInterval(varName, 1000);

     });

     k = 1;
   }
   if (gamePattern[level - 1] !== userClickedPattern[level - 1]) {
     $("h1").text("Oopps! This Level Seems To Be Hard For U.");
     var audio = new Audio("sounds/wrong.mp3");
     audio.play();
     $("body").addClass("game-over");
     setTimeout(function() {
       $("body").removeClass("game-over");
     }, 200);
     startOver();
   }
 });

 function startOver() {
   level = 0;
   gamePattern = [];
   userClickedPattern = [];
 }
