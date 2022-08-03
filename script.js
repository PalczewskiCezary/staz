import { fire } from "./fire";
import { isBetween, isRequired } from "./validation";
import { debounce } from "./debounce";
import { getPeselDate, isPeselValid } from "./pesel";
const form = document.getElementById('form');
const output = document.getElementById("output");

const nameEL = document.querySelector('#name');
const surnameEL = document.querySelector('#surname');
const ageEL = document.querySelector('#age');
const emailELE = document.querySelector('#email');
const descriptionEL = document.querySelector('#description');
const peselEL = document.querySelector('#pesel');
    const checkname = () => {
        const re = new RegExp('[A-Za-z]+');
        let valid = false;
        const min = 3, max = 25;
        const name = nameEL.value.trim();
        if (!isRequired(name)) {
            showError(nameEL, 'Pole nie może być puste');
            nameEL.style.border="2px red solid";
        } else if (!isBetween(name.length, min, max)) {
            showError(nameEL, `Podaj poprawne imię`)
            nameEL.style.border="2px red solid";
        } 
        else if (!re.test(name)) {
            showError(nameEL, 'Podaj poprawne imię')
            nameEL.style.border="2px red solid";
        } 
        else {
            showSuccess(nameEL);
            valid = true;
            nameEL.style.border="2px green solid";
        }
        return valid;
    };
    const checksurname = () => {
        const re = new RegExp('[A-Za-z]+');
        let valid = false;
        const min = 3, max = 25;
        const surname = surnameEL.value.trim();
        if (!isRequired(surname)) {
            showError(surnameEL, 'Pole nie może być puste');
            surnameEL.style.border="2px red solid";
        } else if (!isBetween(surname.length, min, max)) {
            showError(surnameEL, `Podaj poprawne Nazwisko`)
            surnameEL.style.border="2px red solid";
        } 
        else if (!re.test(surname)) {
            showError(surnameEL, 'Podaj poprawne Nazwisko')
            surnameEL.style.border="2px red solid";
        } 
        else {
            showSuccess(surnameEL);
            valid = true;
            surnameEL.style.border="2px green solid";
        }
        return valid;
    };
   const checkage = () => {
        const re = new RegExp('^[0-9]+$');
        let valid = false;
        const age = ageEL.value.trim();
        if (!isRequired(age)) {
            showError(ageEL, 'Pole nie może być puste');
            ageEL.style.border="2px red solid";
        } 
        else if (!re.test(age)) {
            showError(ageEL, 'Podaj poprawny wiek')
            ageEL.style.border="2px red solid";
        } 
        else {
            showSuccess(ageEL);
            valid = true;
            ageEL.style.border="2px green solid";
        }
        return valid;
    }; 
    const checkemail = () => {
        const re = new RegExp('.+@.+');
        let valid = false;
        const email = emailELE.value.trim();
        if (!isRequired(email)) {
            showError(emailELE, 'Pole nie może być puste');
            emailELE.style.border="2px red solid";
        } else if (!re.test(email)) {
            showError(emailELE, 'Podaj poprawny email')
            emailELE.style.border="2px red solid";
        } else {
            showSuccess(emailELE);
            valid = true;
            emailELE.style.border="2px green solid";
        }
        return valid;
    };
    const checkdescription = () => {
        const re = new RegExp('[A-Za-z]+');
        let valid = false;
        const description = descriptionEL.value.trim();
        if (!isRequired(description)) {
            showError(descriptionEL, 'Pole nie może być puste');
            descriptionEL.style.border="2px red solid";
        } 
        else if (!re.test(description)) {
            showError(descriptionEL, 'Podaj poprawny opis')
            descriptionEL.style.border="2px red solid";
        }
        else {
            showSuccess(descriptionEL);
            valid = true;
            descriptionEL.style.border="2px green solid";
        }
        return valid;
    };
    const checkpesel = () => {
        const re = new RegExp('^[0-9]+$');
        let valid = false;
        const pesel = peselEL.value.trim();
        if (!isRequired(pesel)) {
            showError(peselEL, 'Pole nie może być puste');
            peselEL.style.border="2px red solid";
        } 
        else if (!re.test(pesel)) {
            showError(peselEL, 'Podaj poprawny pesel')
            peselEL.style.border="2px red solid";
        } 
        else if(!isPeselValid(pesel)) {
            showError(peselEL, 'Podaj poprawny pesel')
            peselEL.style.border="2px red solid";
        }
        else {
            showSuccess(peselEL);
            valid = true;
            peselEL.style.border="2px green solid";
        }
        return valid;
    };
    const handlePesel = (value) => {
        const pesel = peselEL.value.trim();
        if (checkpesel()) {
           const data = getPeselDate(pesel);
           console.log(data);
        document.getElementById("birth").value ="0"+data.day+" 0"+data.month+" "+data.yearofbirth;
        document.getElementById("age").value = data.year;
        let select = document.getElementById('select');
        select.value = data.sex;
        console.log(value, select.value)
    }
    else {
        document.getElementById("birth").value ="";
        document.getElementById("age").value ="";
    }
}
    const showError = (input, message) => {
        const formitem = input.parentElement;
        formitem.classList.remove('success');
        formitem.classList.add('error');
        const error = formitem.querySelector('small');
        error.textContent = message;
    };
    const showSuccess = (input) => {
        const formitem = input.parentElement;
        formitem.classList.remove('error');
        formitem.classList.add('success');
        const error = formitem.querySelector('small');
        error.textContent = '';
    }    
    form.addEventListener('submit', function (e) {   
        e.preventDefault();     
        let isFormValid = checkname() &&
        checksurname() &&
           checkage() &&
           checkemail() &&
           checkdescription() &&
           checkpesel();
            if (isFormValid) {
            }
    });
    form.addEventListener('input', debounce(function (e) {
        switch (e.target.id) {
            case 'name':
                checkname();
                break;
            case 'surname':
                checksurname();
                break;
           case 'age':
                checkage();
                break; 
            case 'email':
                checkemail();
                break;
            case 'description':
                checkdescription();
                break;
            case 'pesel':
                handlePesel(e.target.value)
                checkpesel();
                break;
            default:
                break;
        }
    }));
form.onsubmit = function(e){
    e.preventDefault();
    const formData = new FormData(form);
    if (checkname() && checksurname() && /*checkage() &&*/ checkemail() && checkdescription() && checkpesel()) {
        output.innerHTML+=formData.get('name')+"<br>"+formData.get('surname')+"<br>"+
        formData.get('age')+"<br>"+formData.get('email')+"<br>"+formData.get('description')
        +"<br>"+formData.get('birth')+"<br>"+formData.get('select')+"<br>"+formData.get('pesel');
    }
    else {
        fire();
    }
};
