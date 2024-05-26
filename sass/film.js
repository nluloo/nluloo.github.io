const selectFilm = document.querySelector('#selectFilm');
const filmInfo = document.querySelector('.film-description');
const filmNameElement = document.querySelector('.film-name');
const filmGenreElement = document.querySelector('.type-film');
const filmDescriptionElement = document.querySelector('.film-info');
const showFilmElement = document.querySelector('.show-film');

fetch('sass/films.xml')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlData = parser.parseFromString(data, 'application/xml');
        const films = Array.from(xmlData.querySelectorAll('film')).map(film => ({
            id: film.getAttribute('id'),
            name: film.querySelector('name').textContent,
            genres: Array.from(film.querySelectorAll('genre')).map(genre => genre.textContent),
            description: film.querySelector('description').textContent,
            imagePath: film.querySelector('imagePath').textContent
        }));

        selectFilm.addEventListener('change', function() {
            const selectedFilmId = this.value;
            const selectedFilmInfo = films.find(film => film.id === selectedFilmId);
            if (selectedFilmInfo) {
                filmNameElement.textContent = selectedFilmInfo.name;
                filmGenreElement.textContent = selectedFilmInfo.genres.join(', ');
                filmDescriptionElement.textContent = selectedFilmInfo.description;
                showFilmElement.style.backgroundImage = `url('${selectedFilmInfo.imagePath}')`;
                filmInfo.style.display = 'flex';
            } else {
                filmInfo.style.display = 'none';
            }
        });
    });
