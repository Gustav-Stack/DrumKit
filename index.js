//the two ways do declare a function this have a function ghost that's a function
//without name the function, the second in this case.


// document.querySelector(".set").addEventListener("click", getClicked);
//
// function getClicked(){
//   alert("Hello");
// }
//this is to get the length of the array .drum button
var drumButton = (document.querySelectorAll(".drum")).length;

//this loop is for add the event to all the buttons
for (var i = 0; i < drumButton; i++) {
  //function ghost is the function that's doesnt need a declarator
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var sound = this.innerHTML;
    Makesound(sound)
    //this is to get the variable of animation that i used down here
    AnimationButton(sound)
  });
}
//the keydown is to pick the function to detect if some key was keypressed
//and i passed the key to the function event and used it with the trigger
//key to display only the letter of the event because him display a lot informa-
//tions on it so you to especify what you want 
document.addEventListener("keydown", function(event) {
  Makesound(event.key)
  //this is to get the variable of animation that i used down here
  AnimationButton(event.key)
});
//this function pick-up the variable sound and transform it in a key pressed
function Makesound(sound) {
  switch (sound) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log('error');
  }
}

function AnimationButton(keypressed){
  //the point concattened with the prhase is because he's a variable
     var keySelected = document.querySelector("."+keypressed+".drum")
     //switch on the AnimationButton
     keySelected.classList.add("pressed");
     //this's a function that is a timer to change the animation of the button
     setTimeout(function () {
       //before 100 milisenconds this function is activated an the animation is removed
      keySelected.classList.remove("pressed");
      //here's the milisenconds
     }, 100);
}



// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
