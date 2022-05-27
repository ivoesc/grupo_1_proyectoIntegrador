window.addEventListener('load', () => {

    const box = document.getElementById('seats-box')

    const button = document.getElementById('button-compra')
    const hour = document.getElementById('Horario')
    const day = document.getElementById('Fecha')
    const complex = document.getElementById('Complejo')
    const movieTitle = document.getElementById('movie-title') 
    const main = document.getElementById('main')

    let params = [hour, day, complex]
    
    let seats = []
    
    for (let i = 1; i <= 6; i++) {
        for (let a = 1; a <= 8; a++) {
            seats.push(document.getElementById('a' + String(i) + String(a)))
        }
    }

    console.log(seats);

    fetch('http://localhost:3000/api/seats/list')
        .then(r => r.json())
        .then(occupiedSeats => {

            for (let s of seats) {
                params.forEach(f => {
                    f.addEventListener('change', () => {
                        s.classList.remove('occupiedSeat');
                        s.classList.add('asiento')
                    })
                })
            }

            for (let occupiedSeat of occupiedSeats.seats) {

                for (let seat of seats) {

                    params.forEach(e => {
                        e.addEventListener('change', () => {
                            
                             if (occupiedSeat.seat_id == seat.id && occupiedSeat.day == day.value && occupiedSeat.hour == hour.value && occupiedSeat.complex.id == complex.value && occupiedSeat.movie.id == movieTitle.dataset.movie_id) {
                                seat.classList.remove('asiento');
                                seat.classList.add('occupiedSeat')

                            }

                    })
                })
               }
            }
        }
    );

    

    let selectedSeats = []

    seats.forEach((s) => {
        s.addEventListener('click', function seatSelection() { 
            
            if (selectedSeats.length < 4 && !s.classList.contains('occupiedSeat') ) {

                //function print () {
                if (!selectedSeats.includes(s)) {
                    s.classList.remove('asiento')
                    s.classList.add('selected')
                } else {
                    s.classList.remove('selected')
                    s.classList.add('asiento')
                }
                //}

                //print();
                
                if (selectedSeats.includes(s)) {
                    if (selectedSeats.indexOf(s) > -1) {
                        
                        selectedSeats.splice(selectedSeats.indexOf(s), 1);

                        sessionStorage.clear();
                        for (let i = 0; i < selectedSeats.length; i++) {
                            sessionStorage.setItem('seat' + (i +1), selectedSeats[i].id)
                        }
                    }
                } else {                 
                    selectedSeats.push(s)
                    sessionStorage.clear();
                    for (let i = 0; i < selectedSeats.length; i++) {
                        sessionStorage.setItem('seat' + (i +1), selectedSeats[i].id)
                    }
                }
              
                

            } else if (selectedSeats.indexOf(s) > -1 && !s.classList.contains('occupiedSeat')) {
                
                selectedSeats.splice(selectedSeats.indexOf(s), 1);

                sessionStorage.clear();
                    for (let i = 0; i < selectedSeats.length; i++) {
                        sessionStorage.setItem('seat' + (i +1), selectedSeats[i].id)
                    }

                s.classList.remove('selected')
                s.classList.add('asiento')
                
            }

            console.clear()
            console.log(sessionStorage)
            console.log(selectedSeats);
            
            
        })
    })

    

    params.forEach(e => {
        e.addEventListener('change', () => {
            sessionStorage.clear();
            selectedSeats.length = 0
            console.clear()
            console.log(sessionStorage)
            console.log(selectedSeats);
        })})


    button.addEventListener('click', async () => {

        sessionStorage.setItem('day', day.value);
        sessionStorage.setItem('hour', hour.value);
        sessionStorage.setItem('complex_id', complex.value);
        sessionStorage.setItem('movie_id', movieTitle.dataset.movie_id)
        sessionStorage.setItem('movie_title', main.dataset.movie_title)

        if (day.value != 'disabled' && complex.value != 'disabled' && hour.value != 'disabled') {

            let data = {

                'seats': selectedSeats.map(seat => seat.id),
                'movie_id': movieTitle.dataset.movie_id,
                'complex_id': complex.value,
                'day': day.value,
                'hour': hour.value,
                'seats': selectedSeats.map(seat => seat.id) 
            }
    
            
            let settings = {
                'method': 'POST',
                'headers': {
                    "content-type": "application/json"
                },
                'body': JSON.stringify(data)
            }
        
            await fetch('http://localhost:3000/api/seats', settings)
                .then(r => r.json())
                .then(u => console.log(u));
    
            window.location = '/'

        } else {
            alert('Campos invalidos')
        }

        
    })

})