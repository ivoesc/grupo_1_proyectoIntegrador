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
        

        /*searchBox.addEventListener('mouseover', function searchBoxMouseOver() {

            searchBox.classList.remove('bgcblack')
            searchBox.classList.add('bgcwhite')

            searchBtn.classList.remove('btnwhite')
            searchBtn.classList.add('btnblack')

        })*/

        searchBox.addEventListener('mouseout', function searchBoxMouseOut() {

            searchBox.classList.remove('bgcwhite')
            searchBox.classList.add('bgcblack')

            searchBtn.classList.remove('btnblack')
            searchBtn.classList.add('btnwhite')

        })
    })
})