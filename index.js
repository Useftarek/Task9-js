const inputField = document.getElementById('inputField');
const errorMessage = document.getElementById('errorMessage');


inputField.addEventListener('input' , () => {

    if (inputField.value.length < 7) {
     
        errorMessage.style.display = 'block';
        inputField.style.borderColor = 'red';
    } else {

        errorMessage.style.display = 'none';
        inputField.style.borderColor = '';
    }
});