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
  document.getElementById("bgMusic").play();
}

window.onload = function(){
  showSlide(0);
};
