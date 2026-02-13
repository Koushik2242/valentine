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
  let music = document.getElementById("bgMusic");
  music.play();
}

function moveNo(btn){
  btn.style.left = Math.random()*200-100+"px";
  btn.style.top = Math.random()*100-50+"px";
}

window.onload = function(){
  showSlide(0);
};
