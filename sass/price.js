
const ticketPrices = {
    's0': [10, 12, 15, 11, 13, 15,20,21,23,25], // Фильм - цена
    's1': [11, 15, 20, 12, 25, 13,21,18,20,27], 
};

const cinemaSelect = document.getElementById('selectCinema');
const filmSelect = document.getElementById('selectFilm');
const priceElement = document.querySelector('.price');

function updateTotalPrice() {
    const cinema = cinemaSelect.value;
    const filmIndex = parseInt(filmSelect.value);
    const totalPrice = ticketPrices[cinema][filmIndex] || 0;
    priceElement.textContent = `Итоговая цена: ${totalPrice} руб.`;
}

cinemaSelect.addEventListener('change', updateTotalPrice);
filmSelect.addEventListener('change', updateTotalPrice);

updateTotalPrice();
