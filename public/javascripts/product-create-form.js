$(document).ready(function() {
        $("#actorsSelect").select2({
                minimumSelectionLength: 3,
                maximumSelectionLength: 3,
                placeholder: 'Actores de la película:',
                allowClear: true,
                closeOnSelect: false
        });  
});

$(document).ready(function() {
    $("#director").select2({
            maximumSelectionLength: 1,
            placeholder: 'Director de la película:',
            allowClear: true
    });  
});

window.addEventListener('load', () => {  

        let form = document.getElementById('product-create-form');
    
        let name = form.name;
        let namebox = document.getElementById('name-box')
    
        function valid (box) {
            box.classList.add('input-valid')
            box.classList.remove('input-invalid')
        }
    
        function invalid (box) {
            box.classList.remove('input-valid')
            box.classList.add('input-invalid')
        }
    
        name.addEventListener('blur', function checkName() {
                
            if (name.value && name.value.length < 70) {
                valid(namebox)
            } else {
                invalid(namebox)
            }
                
        })
    
        let description = form.description;
        let descriptionbox = document.getElementById('description-box')
    
        description.addEventListener('input', function checkdescription() {
                
            if ( description.value.length < 311 && description.value ) {
                valid(descriptionbox)
            } else {
                invalid(descriptionbox)
            }
                
        })
    
        let director = form.director;
        let directorbox = document.getElementById('director-box')
    
        director.addEventListener('input', function checkdirector() {
                
            if ( director.value != "Director de la película:" ) {
                valid(directorbox)
            } else {
                invalid(directorbox)
            }
                
        })
    
        let genre = form.genre;
        let genrebox = document.getElementById('genre-box')
    
        genre.addEventListener('input', function checkgenre() {
    
            if ( genre.value != "Género de la película:" )  {
                valid(genrebox)
            } else {
                invalid(genrebox)
            }
                
        })
    
        let duration = form.duration;
        let durationbox = document.getElementById('duration-box')
    
        duration.addEventListener('input', function checkduration() {
    
            if ( duration.value && duration.value < 500 )  {
                valid(durationbox)
            } else {
                invalid(durationbox)
            }
                
        })

        let category = form.category;
        let categorybox = document.getElementById('category-box')
    
        category.addEventListener('input', function checkcategory() {
    
            if ( category.value != "Categoría de la película:" )  {
                valid(categorybox)
            } else {
                invalid(categorybox)
            }
                
        })

        let price = form.price;
        let pricebox = document.getElementById('price-box')
    
        price.addEventListener('input', function checkprice() {
    
            if ( price.value )  {
                valid(pricebox)
            } else {
                invalid(pricebox)
            }
                
        })
    
        let poster = document.getElementById('poster')
        let posterlabel = document.querySelector('#poster-box p')
        let posterbox = document.getElementById('poster-box')
        let posterIcon = document.getElementById('posterIcon')
    
        poster.addEventListener('change', function checkPoster() {
    
            if ( poster.value && /\.(jpe?g|png|gif|webp)$/i.test(poster.files[0].name) === true)  {
                valid(posterbox)
                posterlabel.innerHTML = poster.files[0].name
                posterlabel.style.color = 'rgb(80, 204, 80)'
                posterIcon.style.color = 'rgb(80, 204, 80)'
                posterIcon.classList.remove('fa-times')
                posterIcon.classList.remove('fa-image')
                posterIcon.classList.add('fa-check')
            } else {
                invalid(posterbox);
                posterlabel.innerHTML = 'Sólo archivos JPG, JPEG, PNG, GIF o WEBP'
                posterlabel.style.color = 'rgb(228, 65, 65)'
                posterIcon.style.color = 'rgb(228, 65, 65)'
                posterIcon.classList.remove('fa-check')
                posterIcon.classList.add('fa-times')
            }
                
        })

        let background = document.getElementById('background')
        let backgroundlabel = document.querySelector('#background-box p')
        let backgroundbox = document.getElementById('background-box')
        let backgroundIcon = document.getElementById('backgroundIcon')
    
        background.addEventListener('change', function checkbackground() {
    
            if ( background.value && /\.(jpe?g|png|gif|webp)$/i.test(background.files[0].name) === true)  {
                valid(backgroundbox)
                backgroundlabel.innerHTML = background.files[0].name
                backgroundlabel.style.color = 'rgb(80, 204, 80)'
                backgroundIcon.style.color = 'rgb(80, 204, 80)'
                backgroundIcon.classList.remove('fa-times')
                backgroundIcon.classList.remove('fa-image')
                backgroundIcon.classList.add('fa-check')
            } else {
                invalid(backgroundbox);
                backgroundlabel.innerHTML = 'Sólo archivos JPG, JPEG, PNG, GIF o WEBP'
                backgroundlabel.style.color = 'rgb(228, 65, 65)'
                backgroundIcon.style.color = 'rgb(228, 65, 65)'
                backgroundIcon.classList.remove('fa-check')
                backgroundIcon.classList.add('fa-times')
            }
                
        })
        
        let trailer = form.trailer;
        let trailerbox = document.getElementById('trailer-box')
    
        trailer.addEventListener('input', function checktrailer() {
    
            if ( trailer.value && validator.isURL(trailer.value))  {
                valid(trailerbox)
            } else {
                invalid(trailerbox)
            }
                
        })
    
    })