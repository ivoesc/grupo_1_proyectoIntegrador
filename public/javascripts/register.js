window.addEventListener('load', () => {

    let form = document.getElementById('register-form');

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

    name.addEventListener('input', function checkName() {
            
        if ( name.value.length > 2 && validator.isAlpha(name.value) ) {
            valid(namebox)
        } else {
            invalid(namebox)
        }
            
    })

    let surname = form.surname;
    let surnamebox = document.getElementById('surname-box')

    surname.addEventListener('input', function checkSurname() {
            
        if ( surname.value.length > 2 && validator.isAlpha(surname.value) ) {
            valid(surnamebox)
        } else {
            invalid(surnamebox)
        }
            
    })

    let email = form.email;
    let emailbox = document.getElementById('email-box')

    mailsArray = []
    
    let usersApi = fetch('http://localhost:3000/api/users/list')
        .then(u => u.json())
        .then(users => {
            users.users.forEach(e => {
                mailsArray.push(e.email)
        })})


    email.addEventListener('blur', function checkEmail() {
            
        if ( validator.isEmail(email.value) && !mailsArray.includes(email.value) ) {
            valid(emailbox)
        } else {
            invalid(emailbox)
        }
            
    })

    let phone = form.phone;
    let phonebox = document.getElementById('phone-box')

    phone.addEventListener('blur', function checkPhone() {

        if ( validator.isNumeric(phone.value) && phone.value.length >= 6 ) {
            valid(phonebox)
        } else {
            invalid(phonebox)
        }
            
    })

    let password = form.password;
    let passwordbox = document.getElementById('password-box')

    password.addEventListener('input', function checkPassword() {

        if ( password.value.length >= 8 )  {
            valid(passwordbox)
        } else {
            invalid(passwordbox)
        }
            
    })

    let confirmpassword = form.confirmPassword;
    let confirmpasswordbox = document.getElementById('confirmpassword-box')

    confirmpassword.addEventListener('input', function checkConfirmPassword() {

        if ( password.value === confirmpassword.value && confirmpassword.value.length >= 8 )  {
            valid(confirmpasswordbox)
        } else {
            invalid(confirmpasswordbox)
        }
            
    })

    let profilepic = document.getElementById('profile_pic')
    let profilepiclabel = document.querySelector('#profilepic-box p')
    let profilepicbox = document.getElementById('profilepic-box')
    let picicon = document.getElementById('pic-icon')

    profilepic.addEventListener('change', function checkProfilePic() {

        if ( profilepic.value && /\.(jpe?g|png|gif|webp)$/i.test(profilepic.files[0].name) === true)  {
            valid(profilepicbox)
            profilepiclabel.innerHTML = profilepic.files[0].name
            profilepiclabel.style.color = 'rgb(80, 204, 80)'
            picicon.style.color = 'rgb(80, 204, 80)'
            picicon.classList.remove('fa-times')
            picicon.classList.remove('fa-image')
            picicon.classList.add('fa-check')
        } else {
            invalid(profilepicbox);
            profilepiclabel.innerHTML = 'Sólo archivos JPG, JPEG, PNG, GIF o WEBP'
            profilepiclabel.style.color = 'rgb(228, 65, 65)'
            picicon.style.color = 'rgb(228, 65, 65)'
            picicon.classList.remove('fa-check')
            picicon.classList.add('fa-times')
        }
            
    })


})