// first thing we need to do is focus on listening for the key up event
//first, what element are we listening on it for?
//listen for keydown event and when it happens, we're gonna listen for a function

 function playSound (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // this will stop funciton from running all together
  audio.currentTime = 0; // this will make the audio's currentTime 0 (rewind to start) before playing, every time. so you can click the same element in succession without waiting for it to stop playing before you can play again
  audio.play(); //if you call play() on an audio element that is already playing, it won't play. so you have to wait for the audio to stop before playing again. so if you want to hit it over and over again in succession, we have to rewind it to the start of the element.
  key.classList.add('playing');
};

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; //skip it if it isn't a transform
  console.log(e.propertyName);
  console.log(this);
  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key'); // when you have an array of elements, you cannot listen on all of them, you have to explicitly loop over every single element and attach an event listener
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
