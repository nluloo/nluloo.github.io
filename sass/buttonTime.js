document.addEventListener('DOMContentLoaded', function() {
    var timeButtons = document.querySelectorAll('.containerBlock button.block');

    timeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            timeButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });
});
