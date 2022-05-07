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
                        selectedSeats.splice(selectedSeats.indexOf(s), 1);
                    }
                } else {
                    selectedSeats.push(s)
                }
              
            } else {
                if (selectedSeats.indexOf(s) > -1) {
                    selectedSeats.splice(selectedSeats.indexOf(s), 1);
                    s.classList.toggle('asiento')
                    s.classList.toggle('selected')
                }
            }
            
        })
    })

    console.log(selectedSeats);

})