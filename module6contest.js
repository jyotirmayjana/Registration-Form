let globalIsSubmitted = false

function validate(isSubmitted = false) {
    let fullName = document.getElementById('full-name').value
    let gender = document.getElementById('gender').value
    let hobbies1 = document.getElementById('swimming').checked
    let hobbies2 = document.getElementById('readingNovel').checked
    let hobbies3 = document.getElementById('dancing').checked
    let hobbies4 = document.getElementById('singing').checked
    let error = false

    if (isSubmitted) {
        ``
        globalIsSubmitted = true
    }


    if ((fullName.length >= 2) && (fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))) {
        document.getElementById('full-name-valid').style.display = 'block'
        document.getElementById('full-name-invalid').style.display = 'none'

    }
    else {
        document.getElementById('full-name-invalid').style.display = 'block'
        document.getElementById('full-name-valid').style.display = 'none'
        error = true
    }

    if (gender != 'None') {
        document.getElementById('gender-valid').style.display = 'block'
        document.getElementById('gender-invalid').style.display = 'none'
    } else {
        document.getElementById('gender-invalid').style.display = 'block'
        document.getElementById('gender-valid').style.display = 'none'
        error = true
    }

    if (hobbies1||hobbies2||hobbies3||hobbies4 === true) {
        document.getElementById('hobbies-valid').style.display = 'block'
        document.getElementById('hobbies-invalid').style.display = 'none'
    } else {
        document.getElementById('hobbies-invalid').style.display = 'block'
        document.getElementById('hobbies-valid').style.display = 'none'
        error = true
    }
    
    
}