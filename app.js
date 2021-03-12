let form = document.querySelector("#myForm");
let resetBtn = document.getElementById("reset");
let parentContainer = document.getElementById('alert');
let error = false;
let elements = [];

form.addEventListener('submit', (event)=> {

    event.preventDefault();

    let cardNumber = document.getElementById('card-number');
    let cvc = document.getElementById('cvc');
    let amount = document.getElementById('amount');
    let firstName = document.getElementById('firstname');
    let lastName = document.getElementById('lastname');
    let city = document.getElementById('city');
    let state = document.getElementById('state');
    let postalcode = document.getElementById('postalcode');
    let textarea = document.getElementById('messages');
    

    if(cardNumber.value.length === 0) elements.push(cardNumber);
    if(cvc.value.length === 0) elements.push(cvc); 
    if(amount.value.length === 0) elements.push(amount);

    if(firstName.value.trim() === '') elements.push(firstName);
    if(lastName.value.trim() === '') elements.push(lastName);

    if(city.value.trim() === '') elements.push(city);
    if(state.value.trim() === '') elements.push(state);
    if(postalcode.value.length === 0) elements.push(postalcode);

    if(textarea.value.trim() === '') elements.push(textarea);

    error = true;
    createAlert();
    changeBackgroundColor(elements);

    return;
})

resetBtn.addEventListener('click', ()=> {
    changeBackgroundColor(elements);
    parentContainer.innerHTML = null;

})

const changeBackgroundColor = elements => {
    
    if(error) {
        elements.forEach(element => {
            element.style.backgroundColor = '#ffcdd2';
            element.disabled = true;
        })
    }else {
        elements.forEach(element => {
            element.style.backgroundColor = 'white';
            element.disabled = false;
        })
    }
    error = false;
}

const createAlert = () => {
    if(error){
        return parentContainer.innerHTML = '<div class="alert alert-danger" role="alert" id="alert-msg">Some fields are missing.</div>'
    }
}
