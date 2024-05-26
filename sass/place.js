const placeElements = document.querySelectorAll('.placeSeet');

const infoElement = document.querySelector('.info');

placeElements.forEach(place => {
    place.addEventListener('click', () => {
        placeElements.forEach(p => {
            p.classList.remove('selected');
        });
        place.classList.add('selected');

        const row = place.getAttribute('row');
        const index = place.getAttribute('index');

        infoElement.innerHTML = `<p>Ряд ${row}</p><p>Место ${index}</p>`;
        
        infoElement.style.display = 'block';
    });
});

document.addEventListener('click', (event) => {
    if (!infoElement.contains(event.target) && !event.target.classList.contains('placeSeet')) {
        placeElements.forEach(place => {
            place.classList.remove('selected');
        });
        infoElement.style.display = 'none';
    }
});

