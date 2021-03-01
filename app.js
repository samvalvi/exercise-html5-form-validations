let form = document.querySelector("#myForm");

form.addEventListener('submit', (event)=> {

    event.preventDefault();

    let cardNumber = document.getElementById('card-number').value;
    let cvc = document.getElementById('cvc').value;
    let amount = document.getElementById('amount').value;
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let textarea = document.getElementById('messages').value;

    if(cardNumber.trim() === '' || cvc.trim() === '' || amount.trim() === '' || firstName.trim() === '' || lastName.trim() === '' ||
       city.trim() === '' || state.trim() === '' || textarea.trim() === '') {
        console.log('Some fields are missing');
        return;
    }

})