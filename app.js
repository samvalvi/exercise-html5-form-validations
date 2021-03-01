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
    let elements = [];

    if(cardNumber.value.trim() === '') {
            elements.push(cardNumber);
        } 
    if(cvc.value.trim() === '') {
            elements.push(cvc);
        } 
    if(amount.value.trim() === ''){
            elements.push(amount);
        } 
    if(firstName.value.trim() === ''){
            elements.push(firstName);
        } 
    if(lastName.value.trim() === ''){
            elements.push(lastName);
        }
    if(city.value.trim() === ''){
            elements.push(city);
        } 
    if(state.value.trim() === ''){
            elements.push(state);
        } 
    if(textarea.value.trim() === '') {
            elements.push(textarea);
        }

    let parentContainer = document.getElementById('alert');
    let errorAlert = document.createElement('div');
        
    let html = `<div class="m-4 alert alert-danger" role="alert">
                    Some fields are missing
                </div>`

    errorAlert.innerHTML = html;
        
    parentContainer.appendChild(errorAlert);

    changeBackgroundColor(elements);

    return;

})

const changeBackgroundColor = elements => {
    elements.forEach(element => {
        element.style.backgroundColor = '#ffcdd2';
    })
}