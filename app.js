let form = document.querySelector("#myForm");

form.addEventListener('submit', (event)=> {

    event.preventDefault();

    let cardNumber = document.getElementById('card-number');
    let cvc = document.getElementById('cvc');
    let amount = document.getElementById('amount');
    let firstName = document.getElementById('firstname');
    let lastName = document.getElementById('lastname');
    let city = document.getElementById('city');
    let state = document.getElementById('state');
    let textarea = document.getElementById('messages');

    if(cardNumber.value.trim() === '' || cvc.value.trim() === '' || amount.value.trim() === '' || firstName.value.trim() === '' || lastName.value.trim() === '' ||
       city.value.trim() === '' || state.value.trim() === '' || textarea.value.trim() === '') {
        console.log('Some fields are missing');

        let parentContainer = document.getElementById('alert');
        let errorAlert = document.createElement('div');
        
        let html = `<div class="m-4 alert alert-danger" role="alert">
                        Some fields are missing
                    </div>`

        errorAlert.innerHTML = html;
        parentContainer.appendChild(errorAlert);

        let elements = [cardNumber, cvc, amount, firstName, lastName, city, state, textarea];
        changeBackgroundColor(elements);

        return;
    }

})


const changeBackgroundColor = elements => {
    elements.forEach(element => {
        element.style.backgroundColor = '#ffcdd2';
    })
}