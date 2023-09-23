const inputs = document.querySelectorAll('input');
// const formControl = document.querySelector('.form-control')
const icons = document.querySelector('input + i')

// Reqular patterns
const patterns = {
    firstName : /^[a-z]{2,15}$/i,
    lastName : /^[a-z]{2,15}$/i,
    email : /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
    password : /^[\w@-]{8,30}/
};

// Check the validation of he input
function validation(field, regex) {
    if (regex.test(field.value)) {
        field.style.border = '2px solid green';
        icons.innerHTML = '<i class="fa-sharp fa-solid fa-badge-check" style="color: #00ff2a;"></i>'
    }
    else if (field.value ==="") {
        field.style.border = '2px solid var(--text-light-clr)';
        icons.style.visibilty = 'hidden';
    }
    else {
        field.style.border = '2px solid red'
        icons.innerHTML = '<i class="fa-sharp fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>'
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validation(e.target, patterns[e.target.attributes.name.value])
    })
}) 