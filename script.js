const form = document.getElementById('form');
const output = document.getElementById("output");

const nameEL = document.querySelector('#name');
const surnameEL = document.querySelector('#surname');
//const ageEL = document.querySelector('#age');
const emailELE = document.querySelector('#email');
const descriptionEL = document.querySelector('#description');
const peselEL = document.querySelector('#pesel');
    const checkname = () => {
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
        else if (!isNameValid(name)) {
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
        else if (!isSurnameValid(surname)) {
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
   /* const checkage = () => {
        let valid = false;
        const age = ageEL.value.trim();
        if (!isRequired(age)) {
            showError(ageEL, 'Pole nie może być puste');
            ageEL.style.border="2px red solid";
        } 
        else if (!isAgeValid(age)) {
            showError(ageEL, 'Podaj poprawny wiek')
            ageEL.style.border="2px red solid";
        } 
        else {
            showSuccess(ageEL);
            valid = true;
            ageEL.style.border="2px green solid";
        }
        return valid;
    }; */
    const checkemail = () => {
        let valid = false;
        const email = emailELE.value.trim();
        if (!isRequired(email)) {
            showError(emailELE, 'Pole nie może być puste');
            emailELE.style.border="2px red solid";
        } else if (!isEmailValid(email)) {
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
        let valid = false;
        const description = descriptionEL.value.trim();
        if (!isRequired(description)) {
            showError(descriptionEL, 'Pole nie może być puste');
            descriptionEL.style.border="2px red solid";
        } 
        else if (!isDescriptionValid(description)) {
            showError(descriptionEL, 'Podaj poprawny email')
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
        let valid = false;
        const pesel = peselEL.value.trim();
        if (!isRequired(pesel)) {
            showError(peselEL, 'Pole nie może być puste');
            peselEL.style.border="2px red solid";
        } 
        else if (!isPeselValid(pesel)) {
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
    const isNameValid = (name) => {
        const re = new RegExp('[A-Za-z]+');
        return re.test(name);
    }  
    const isSurnameValid = (surname) => {
        const re = new RegExp('[A-Za-z]+');
        return re.test(surname);
    } 
    const isEmailValid = (email) => {
        const re = new RegExp('.+@.+');
        return re.test(email);
    };
   /* const isAgeValid = (age) => {
        const re = new RegExp('^[0-9]+$');
        return re.test(age);
    } */
    const isDescriptionValid = (description) => {
        const re = new RegExp('[A-Za-z]+');
        return re.test(description);
    }
    const isPeselValid = (pesel) => {
        const re = new RegExp('^[0-9]+$');
        return re.test(pesel);
    }
    const isRequired = value => value === '' ? false : true;
    const isBetween = (length, min, max) => length < min || length > max ? false : true;
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
        let isNameValid = checkname(),
         isSurnameValid = checksurname(),
        // isAgeValid = checkage(),
         isEmailValid = checkemail(),
         isDescriptionValid = checkdescription(),
         isPeselValid = checkpesel();        
        let isFormValid = isNameValid &&
            isSurnameValid &&
           // isAgeValid &&
            isEmailValid &&
            isDescriptionValid &&
            isPeselValid;
            if (isFormValid) {

            }
    });
    
    
    const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                fn.apply(null, args)
            }, delay);
        };
    };
    
    form.addEventListener('input', debounce(function (e) {
        switch (e.target.id) {
            case 'name':
                checkname();
                break;
            case 'surname':
                checksurname();
                break;
     /*       case 'age':
                checkage();
                break; */
            case 'email':
                checkemail();
                break;
            case 'description':
                checkdescription();
                break;
            case 'pesel':
                checkpesel();
                break;
            default:
                break;
        }
    }));

fire = function() {
        const alertbg = document.createElement("div");
        alertbg.setAttribute("id", "alert");
        alertbg.style.display = "flex";
        const alert = document.createElement("div");
        const btn = document.createElement("button");
        btn.textContent="OK"
        const p = document.createElement("p");
        p.textContent="Proszę poprawnie wprowadzić dane!"
        const img = document.createElement("img")
        img.src = "https://www.computerhope.com/jargon/e/error.png";
        alert.appendChild(img);
        alert.appendChild(p)
        alert.appendChild(btn)
        alertbg.appendChild(alert)
        document.body.appendChild(alertbg)
        btn.onclick  = function(){
            alertbg.style.display = "none";
            alert.innerHTML="";
        }
}
form.onsubmit = function(e){
    e.preventDefault();
    const formData = new FormData(form);
    
    const stringRE = new RegExp('[A-Za-z]+');
    const mailRE = new RegExp('.+@.+');
    const intRE = new RegExp('^[0-9]+$');
   
    const variable = stringRE.test(formData.get('name'));
    const variable2 = stringRE.test(formData.get('surname'));
    //const variable3 = intRE.test(formData.get('age'));
    const variable4 = mailRE.test(formData.get('email'));
    const variable5 = stringRE.test(formData.get('description'));
    const variable6 = intRE.test(formData.get('pesel'));
   
    if (variable && variable2 && /*variable3 &&*/ variable4 && variable5 && variable6) {
        
        output.innerHTML+=formData.get('name')+"<br>"+formData.get('surname')+/*"<br>"+
        formData.get('age')+*/"<br>"+formData.get('email')+"<br>"+
        formData.get('description')/*+"<br>"+formData.get('select')*/+"<br>"+formData.get('pesel');
    }
    else {
        fire();
    }
};
