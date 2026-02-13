let current = 0;

function showSlide(index){
  const slides = document.querySelectorAll(".slide");
  slides.forEach(s => s.style.display = "none");
  slides[index].style.display = "flex";
}

function nextSlide(){
  const slides = document.querySelectorAll(".slide");
  current++;
  if(current >= slides.length){
    current = slides.length - 1;
  }
  showSlide(current);
}

function playVoice(){
  document.getElementById("voiceNote").play();
}
function startMusic(){
  const voice = document.getElementById("voiceNote");
  const music = document.getElementById("bgMusic");

  if(voice){
    voice.pause();     // stop voice first
    voice.currentTime = 0;
  }

  music.currentTime = 0;
  music.play();
}

function moveNo(btn){
  btn.style.position="absolute";
  btn.style.left = Math.random()*70 + "%";
  btn.style.top = Math.random()*60 + "%";
}


window.onload = function(){
  showSlide(0);
};
