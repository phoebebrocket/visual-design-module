// contact form for the contact page - alert 

const formName = document.getElementById('form-name')

const email = document.getElementById('form-email')

const form = document.getElementById('contact-form')

const formMessage = document.getElementById('form-message')

const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []

    if (formName.value === '' || formName.value == null) {
        messages.push('Please enter your name')
    }

    if (email.value === '' || email.value == null) {
        messages.push("Don't forget your email")
    }

    if (formMessage.value === '' || formMessage.value == null) {
        messages.push('You need to write a message')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(' and ')
    }

    else {
        alert('Your message has been sent and we will be in touch soon! Thank you')
    }
})
