window.addEventListener('load', () => {

    const box = document.getElementById('seats-box')

    const f1 = document.getElementById('f1').id
    const f2 = document.getElementById('f2')
    const f3 = document.getElementById('f3')
    const f4 = document.getElementById('f4')
    const f5 = document.getElementById('f5')
    const f6 = document.getElementById('f6')

    let seats = []
    
    for (let i = 1; i <= 6; i++) {
        for (let a = 1; a <= 8; a++) {
            seats.push(document.getElementById('a' + String(i) + String(a)))
        }
    }

    console.log(seats);

    let selectedSeats = []
    
    seats.forEach((s) => {
        s.addEventListener('click', function seatSelection() { 
            
            if (selectedSeats.length < 4) {

                s.classList.toggle('asiento')
                s.classList.toggle('selected')
                
                

                if (selectedSeats.includes(s)) {
                    if (selectedSeats.indexOf(s) > -1) {
                        
                        //sessionStorage.removeItem('seat' + (selectedSeats.indexOf(s) +2) )
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
                    //sessionStorage.setItem('seat' + (selectedSeats.indexOf(s) +1), s.id)
                }
              
                

            } else {
                if (selectedSeats.indexOf(s) > -1) {
                    //sessionStorage.removeItem('seat' + (selectedSeats.indexOf(s) +1) )
                    selectedSeats.splice(selectedSeats.indexOf(s), 1);

                    sessionStorage.clear();
                        for (let i = 0; i < selectedSeats.length; i++) {
                            sessionStorage.setItem('seat' + (i +1), selectedSeats[i].id)
                        }

                    s.classList.toggle('asiento')
                    s.classList.toggle('selected')
                }
            }

            console.log(sessionStorage)
            
        })
    })

    console.log(selectedSeats);

    const button = document.getElementById('button-compra')
    const hour = document.getElementById('Horario')
    const day = document.getElementById('Fecha')
    const complex = document.getElementById('Complejo')
    const movieTitle = document.getElementById('movie-title')


    button.addEventListener('click', async () => {

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
            .then(u => window.location = '/')
        
        
    })

})