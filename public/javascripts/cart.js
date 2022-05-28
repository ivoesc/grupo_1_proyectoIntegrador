window.addEventListener('load', () => {

    document.getElementById("button");


    let selectedSeats = []

    let seat1 = sessionStorage.getItem("seat1")
    let seat2 = sessionStorage.getItem("seat2")
    let seat3 = sessionStorage.getItem("seat3")
    let seat4 = sessionStorage.getItem("seat4")

    selectedSeats.push(seat1)

    if (seat2 != null) { selectedSeats.push(seat2) } 
    if (seat3 != null) { selectedSeats.push(seat3) } 
    if (seat4 != null) { selectedSeats.push(seat4) } 
    console.log(selectedSeats)

    let movie_id = sessionStorage.getItem("movie_id")
    let complex_id = sessionStorage.getItem("complex_id")
    let day = sessionStorage.getItem("day")
    let hour = sessionStorage.getItem("hour")

    let button = document.getElementById("button")

    button.addEventListener('click', async () => {
        let data = {
            'seats': selectedSeats.map(seat => seat),
            'movie_id': movie_id,
            'complex_id': complex_id,
            'day': day,
            'hour': hour,
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
            
            window.location = "/"
    })

})
