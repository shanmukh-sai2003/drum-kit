var numberOfDrums = document.querySelectorAll(".drum").length;
var i = 0;
var music = ["tom-1", "tom-2", "tom-3", "tom-4", "crash", "kick-bass", "snare"];
var currentSound;
for(i = 0; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      var select = this.innerHTML;
      selectSong(select);
      buttonAnimation(select);
    });
}

document.addEventListener("keypress", function(event) {
  selectSong(event.key);
  buttonAnimation(event.key);
})

function selectSong(select) {
  switch (select) {
    case 'w':
      var currentSound = "sounds/" + music[0] + ".mp3";
      break;
    case 'a':
      var currentSound = "sounds/" + music[1] + ".mp3";
      break;
    case 's':
      var currentSound = "sounds/" + music[2] + ".mp3";
      break;
    case 'd':
      var currentSound = "sounds/" + music[3] + ".mp3";
      break;
    case 'j':
      var currentSound = "sounds/" + music[4] + ".mp3";
      break;
    case 'k':
      var currentSound = "sounds/" + music[5] + ".mp3";
      break;
    case 'l':
      var currentSound = "sounds/" + music[6] + ".mp3";
      break;
  }
  var audio = new Audio(currentSound);
  audio.play();
}

function buttonAnimation(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
