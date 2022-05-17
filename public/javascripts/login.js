window.addEventListener('load', () => {
    
    let form = document.getElementById('login-form');
    
    let email = form.email;
    let emailbox = document.getElementById('email-box')

    function valid (box) {
        box.classList.add('input-valid')
        box.classList.remove('input-invalid')
    }

    function invalid (box) {
        box.classList.remove('input-valid')
        box.classList.add('input-invalid')
    }

    email.addEventListener('blur', function checkemail() {
            
        if ( validator.isEmail(email.value) ) {
            valid(emailbox)
        } else {
            invalid(emailbox)
        }
            
    })
})