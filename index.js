var addFlashButton = document.getElementById('create-flash-button');

addFlashButton.addEventListener('click', openAddflash);

function openAddflash() {
   var modalBackdrop = document.getElementById('modal-backdrop');
   var modal = document.getElementById('create-flash-modal');
   modalBackdrop.classList.remove('hidden');
   modal.classList.remove('hidden');
}

var closeModalButton = document.getElementsByClassName('modal-close-button')[0];

closeModalButton.addEventListener('click', closeModal);

function closeModal(){
   var flashFront = document.getElementById('flash-word-input');
   var flashBack = document.getElementById('flash-desc-input');
   flashFront.value = '';
   flashBack.value = '';
   var modalBackdrop = document.getElementById('modal-backdrop');
   var modal = document.getElementById('create-flash-modal');
   modalBackdrop.classList.add('hidden');
   modal.classList.add('hidden');
}

var cancelModalButton = document.getElementsByClassName('modal-cancel-button')[0];

cancelModalButton.addEventListener('click', closeModal);

var acceptModalButton = document.getElementsByClassName('modal-accept-button')[0];

acceptModalButton.addEventListener('click', addflash);