window.addEventListener('load', () => {
    
<<<<<<< HEAD
    const mercadopago = new MercadoPago('TEST-9b2ea596-7cd7-4812-9e5a-266936740c71', {
=======
    const mercadopago = new MercadoPago('TEST-66a890d7-f64c-4cc1-9a6d-ccfc94e4bcbf', {
>>>>>>> 849d63169bb65749f9f4fb92f0600dfc0be1c814
        locale: 'es-AR'
      });

    let selectedSeats = []

        let seat1 = sessionStorage.getItem("seat1")
        let seat2 = sessionStorage.getItem("seat2")
        let seat3 = sessionStorage.getItem("seat3")
        let seat4 = sessionStorage.getItem("seat4")

        if (seat1 != null) { selectedSeats.push(seat1) } 
        if (seat2 != null) { selectedSeats.push(seat2) } 
        if (seat3 != null) { selectedSeats.push(seat3) } 
        if (seat4 != null) { selectedSeats.push(seat4) } 
        console.log(selectedSeats)

    let emptyArticles = document.getElementById("empty-articles")
    let totalContainer = document.getElementById("total-container")

    let ticket = document.getElementById("ticket")

    let movie_title = sessionStorage.getItem("movie_title")
    let movie_id = sessionStorage.getItem("movie_id")
    let complex_id = sessionStorage.getItem("complex_id")

    let complex 

    if (complex_id == 1 ) {
        complex = 'BigScreen Caballito'
    }

    if (complex_id == 2 ) {
        complex = 'BigScreen Recoleta'
    }

    if (complex_id == 3 ) {
        complex = 'BigScreen Nordelta'
    }

    let day = sessionStorage.getItem("day")
    let hour = sessionStorage.getItem("hour")

    let button = document.getElementById("checkout-btn")

    if (selectedSeats.length != 0) {
        emptyArticles.classList.add("hidden")
        
        selectedSeats.forEach(s => {
            
            let singleTicket = document.createElement('div')
            singleTicket.classList.add('ticket')
            ticket.appendChild(singleTicket)
            
            let ticketInfo = document.createElement('div')
            ticketInfo.classList.add('ticket-info')
            singleTicket.appendChild(ticketInfo)

                let ticketMovieTitle = document.createElement('p')
                ticketMovieTitle.classList.add('ticket-movie-title')
                ticketMovieTitle.innerHTML = movie_title
                ticketInfo.appendChild(ticketMovieTitle)

                let ticketExtraInfo = document.createElement('p')
                ticketExtraInfo.classList.add('ticket-extra-info')
                ticketExtraInfo.innerHTML = s.toUpperCase() + ' ' + day.split('_').join(' ').toUpperCase() + ' ' + hour + '<br>' + ' ' + complex.toUpperCase() 
                ticketInfo.appendChild(ticketExtraInfo)

            let ticketPrice = document.createElement('div')
            ticketPrice.classList.add('ticket-price')
            ticketPrice.innerHTML = '$1000'
            singleTicket.appendChild(ticketPrice)

                let ticketPriceText = document.createElement('p')
                ticketPrice.appendChild(ticketPriceText)
        })

        totalContainer.classList.add('total-container')
        
        button.classList.remove('hidden')
        
        let totalText = document.createElement('p')
        totalText.classList.add('total-text')
        totalText.innerHTML = 'Total'
        totalContainer.appendChild(totalText)

        let totalPrice = document.createElement('p')
        totalPrice.classList.add('total-price')
        totalPrice.innerHTML = '$' + selectedSeats.length * 1000
        totalContainer.appendChild(totalPrice)

        button.classList.add("mp-link")

        let buttonContainer = document.createElement('div')
        buttonContainer.classList.add("mp-login")
        buttonContainer.innerHTML = "Pagá con " + "<img " + "src=" + "'https://logotipoz.com/wp-content/uploads/2021/10/version-horizontal-large-logo-mercado-pago.webp'" + "class='mp-icon'" + ">" 
        button.appendChild(buttonContainer)


    }

    

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
    
    
        const orderData = {
            'quantity': selectedSeats.length,
            'seats': selectedSeats.map(seat => seat),
            'movie_id': movie_id,
            'movie_title': movie_title,
            'complex_id': complex_id,
            'day': day,
            'hour': hour,
            };

            fetch("/create_preference", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
              })
                .then(function(response) {
                    return response.json();
                })
                .then(function(preference) {
                    createCheckoutButton(preference.id);
                })

            function createCheckoutButton(preferenceId) {
                // Initialize the checkout
                mercadopago.checkout({
                    preference: {
                        id: preferenceId
                    },
                    render: {
                        container: '#container-checkout',
                        label: 'Pagar',
                    }
                });
                }
    
    })

})