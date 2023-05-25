var modalButtons = document.querySelectorAll('.js-open-modal');
var overlay = document.querySelector('.js-overlay-modal');
var closeButtons = document.querySelectorAll('.js-modal-close');
var goTopBtn = document.querySelector('.go-top');

modalButtons.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    var modalId = this.getAttribute('data-modal');
    var modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

    document.body.classList.add('modal-for-html-body');
    modalElem.classList.add('active');
    overlay.classList.add('active');

    
    goTopBtn.style.display = 'none';
  });
});

closeButtons.forEach(function (item) {
  item.addEventListener('click', function (e) {
    var parentModal = this.closest('.modal');

    parentModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('modal-for-html-body');

    
    if (!document.querySelector('.modal.active')) {
      goTopBtn.style.display = 'block';
    }
  });
});

document.body.addEventListener('keyup', function (e) {
  var key = e.keyCode;

  if (key == 27) {
    document.querySelector('.modal.active').classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('modal-for-html-body');

   
    if (!document.querySelector('.modal.active')) {
      goTopBtn.style.display = 'block';
    }
  }
}, false);

overlay.addEventListener('click', function () {
  document.querySelector('.modal.active').classList.remove('active');
  this.classList.remove('active');
  document.body.classList.remove('modal-for-html-body');

  
  if (!document.querySelector('.modal.active')) {
    goTopBtn.style.display = 'block';
  }
});