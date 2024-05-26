document.addEventListener('DOMContentLoaded', function() {
    var controls = document.querySelectorAll('.control a');
    var contents = document.querySelectorAll('.images .content');
    var filmName = document.querySelector('.nameFilm .SocialNetwork');
    var filmLink = document.querySelector('.firstFilm');

    var films = [
        { name: 'СОЦИАЛЬНАЯ СЕТЬ', href: 'social.html' },
        { name: 'ИНТЕРСТЕЛЛАР', href: 'int.html' },
        { name: 'ОСТРОВ ПРОКЛЯТЫХ', href: 'island.html' },
        { name: 'АФИША', href: 'error.html' },
    ];

    controls.forEach(function(control, index) {
        control.addEventListener('click', function(event) {
            controls.forEach(function(control) {
                control.classList.remove('active');
            });

            control.classList.add('active');

            contents.forEach(function(content) {
                content.classList.remove('active');
            });

            var activeContent = document.querySelector('.images .content[data-index="' + index + '"]');
            activeContent.classList.add('active');

            filmName.classList.add('fade-ou');

            setTimeout(function() {
                filmName.innerText = films[index].name;
                filmName.classList.remove('fade-ou');
            }, 1000);
            filmLink.classList.add('fade-out');

            setTimeout(function() {
                filmLink.href = films[index].href;
                filmLink.classList.remove('fade-out');
            }, 1000);

        });
    });
});
