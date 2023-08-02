const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hearts = document.getElementsByClassName('like-glyph');

for (const heart of hearts) {
  heart.removeEventListener('click', changeHeart);
}

function showErrorModal(message) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  modalMessage.textContent = message;
  modal.classList.remove('hidden');

setTimeout(() => modal.classList.add('hidden'), 3000);
}

function changeHeart(event) {
  const heart = event.target;
  if (heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART;
    heart.classList.add('activated-heart');
  } else {
    heart.textContent = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
}

mimicServerCall()
  .then(function () {
    for (const heart of hearts) {
      heart.addEventListener('click', changeHeart);
      heart.classList.remove('hidden');
    }
  })
  .catch(error => showErrorModal(error));

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
