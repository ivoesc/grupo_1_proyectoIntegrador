window.addEventListener('load', () => {

    let searchBox = document.getElementById('search-box')
    let searchInput = document.getElementById('search-input')
    let searchBtn = document.getElementById('search-btn')
    
    searchInput.addEventListener('focus', function searchBoxBackground() {
        
        searchBox.classList.remove('bgcblack')
        searchBox.classList.add('bgcwhite')

        searchBtn.classList.remove('btnwhite')
        searchBtn.classList.add('btnblack')
        
        
        searchBox.addEventListener('mouseout', function searchBoxMouseOut() {

            searchBox.classList.remove('bgcblack')
            searchBox.classList.add('bgcwhite')

            searchBtn.classList.remove('btnwhite')
            searchBtn.classList.add('btnblack')

        })

    })


    searchInput.addEventListener('focusout', function searchBoxBackgroundOut() {
        
        searchBox.classList.remove('bgcwhite')
        searchBox.classList.add('bgcblack')

        searchBtn.classList.remove('btnblack')
        searchBtn.classList.add('btnwhite')
        


        searchBox.addEventListener('mouseout', function searchBoxMouseOut() {

            searchBox.classList.remove('bgcwhite')
            searchBox.classList.add('bgcblack')

            searchBtn.classList.remove('btnblack')
            searchBtn.classList.add('btnwhite')

        })
    })



    let moviesArray = []

    let moviesApi = fetch('http://localhost:3000/api/movies/list')
        .then(r => r.json())
        .then(movies => {
            movies.movies.forEach(m => {
                moviesArray.push(m)
            })
        })

    console.log(moviesArray);
    console.log(moviesApi);


    function autocomplete(inp, arr) {

        var currentFocus;

        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;

            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;

            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "search-txt-items");

            this.parentNode.appendChild(a);

            for (i = 0; i < arr.length; i++) {

            if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {

                b = document.createElement("DIV");

                b.innerHTML = "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].name.substr(val.length);

                b.innerHTML += "<input type='hidden' value='" + arr[i].name + "'>";
                movieId = arr[i].id

                    b.addEventListener("click", function(e) {

                    window.location = '/movies/detail/' + movieId
                    

                    closeAllLists();
                });
                a.appendChild(b);
            }
            }
        });

        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {

            currentFocus++;

            addActive(x);
            } else if (e.keyCode == 38) { //up

            currentFocus--;

            addActive(x);
            } else if (e.keyCode == 13) {

            e.preventDefault();
            if (currentFocus > -1) {

                if (x) x[currentFocus].click();
            }
            }
        });
        function addActive(x) {

        if (!x) return false;

        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);

        x[currentFocus].classList.add("search-txt-active");
        }
        function removeActive(x) {

        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("search-txt-active");
        }
        }
        function closeAllLists(elmnt) {

        var x = document.getElementsByClassName("search-txt-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
        }
        }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
    }

    autocomplete(searchInput, moviesArray);

                    
})