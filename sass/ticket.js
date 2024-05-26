document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.finish button').addEventListener('click', function() {
        var selectedCinema = document.getElementById('selectCinema').value;
        var selectedFilm = document.getElementById('selectFilm').options[document.getElementById('selectFilm').selectedIndex].text;
        var selectedDate = document.getElementById('start').value;
        var selectedTime = document.querySelector('.containerBlock button.active').textContent;

        var selectedPlaces = [];
        document.querySelectorAll('.placeSeet.selected').forEach(function(place) {
            selectedPlaces.push({
                row: place.getAttribute('row'),
                index: place.getAttribute('index')
            });
        });

        var tickets = [];
        selectedPlaces.forEach(function(place) {
            var ticket = {
                cinema: selectedCinema,
                film: selectedFilm,
                date: selectedDate,
                time: selectedTime,
                place: place
            };
            tickets.push(ticket);
        });

        var previousTickets = JSON.parse(localStorage.getItem('tickets')) || [];

        var existingTickets = previousTickets.some(function(existingTicket) {
            return tickets.some(function(newTicket) {
                return JSON.stringify(existingTicket) === JSON.stringify(newTicket);
            });
        });

        if (existingTickets) {
            alert('Невозможно заказать один и тот же билет повторно!');
            return;
        }

        var allTickets = previousTickets.concat(tickets);
        localStorage.setItem('tickets', JSON.stringify(allTickets));

        alert('Билеты успешно сохранены!');
    });

    updateSeatAvailability(selectedCinema, selectedDate, selectedTime, selectedFilm, previousTickets);
});
