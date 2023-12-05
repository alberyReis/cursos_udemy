const txtEmail = document.querySelector('#txtemail')
const msgFeedback = document.querySelector('#newsletterfeedback')

function cadastrarEmail() {
   let email = txtEmail.value
   msgFeedback.innerHTML = `O email ${email} foi cadastardo com sucesso`
}


