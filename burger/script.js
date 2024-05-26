document.querySelectorAll('.burger, .overlay').forEach(function(element) {
  element.addEventListener('click', function() {
     document.querySelector('.burger').classList.toggle('clicked');
     document.querySelector('.overlay').classList.toggle('show');
     document.querySelector('nav').classList.toggle('show');
     document.body.classList.toggle('overflow');
  });
 });
 