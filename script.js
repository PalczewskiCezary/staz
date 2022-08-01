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
    const handlePesel = (value) => {
        const pesel = peselEL.value.trim();
        let year = parseInt(pesel.substring(0,2),10);
        let month = parseInt(pesel.substring(2,4),10)-1;
        let day = parseInt(pesel.substring(4,6),10);
        if (checkpesel()) {
        if (month > 12) {
            yearofbirth = 2000 + year;
        }
        else {
            yearofbirth = 1900 + year;
        }
        document.getElementById("birth").value ="0"+day+" 0"+month+" "+yearofbirth;
        if (month > 12) {
            year = 2022 - (2000 + year);
            month = month - 20;
        }
        else {
            year = 2022 - (1900 + year);
        }
        document.getElementById("age").value = year;
        console.log(value)
    }
    else {
        document.getElementById("birth").value ="";
        document.getElementById("age").value ="";
    }
}

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
        const weight = [9,7,3,1,9,7,3,1,9,7];
        let sum = 0;
        for (let i =1;i<weight.length;i++) {
            sum+=(parseInt(pesel.substring(i,i+1),10)*weight[i]);
        }
        sum=sum%10;
        const control = parseInt(pesel.substring(10,11),10);
        let corectness = (sum === control);
        if (!isRequired(pesel)) {
            showError(peselEL, 'Pole nie może być puste');
            peselEL.style.border="2px red solid";
        } 
        else if (!re.test(pesel)) {
            showError(peselEL, 'Podaj poprawny pesel')
            peselEL.style.border="2px red solid";
        } 
        else if(!corectness) {
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
        let isFormValid = checkname() &&
        checksurname() &&
           checkage() &&
           checkemail() &&
           checkdescription() &&
           checkpesel();
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
    function psl(){
        const pesel = peselEL.value.trim();
        let year = parseInt(pesel.substring(0,2),10);
        let month = parseInt(pesel.substring(2,4),10)-1;
        let day = parseInt(pesel.substring(4,6),10);
        if (month >= 80) {
            year += 1800;
            month = month-80;
        }
        else if (month >= 60) {
            year+=2200;
            month = month-60;
        }
        else if (month >= 40) {
            year+=2100;
        month = month-40;
        }
        else if (month >= 20) {
            year+=2000;
            month = month-20;
        }
        else {
            year+=1900;
        }
        const dayofbirth = new Date();
        dayofbirth.setFullYear(year,month,day);
        let sex = 'Kobieta';
        if(parseInt(pesel.substring(9,10),10) % 2 === 1){
            sex = 'Mężczyzna';
        } 
        const weight = [9,7,3,1,9,7,3,1,9,7];
        let sum = 0;
        for (let i =1;i<weight.length;i++) {
            sum+=(parseInt(pesel.substring(i,i+1),10)*weight[i]);
        }
        sum=sum%10;
        const control = parseInt(pesel.substring(10,11),10);
        let corectness = (sum === control);
        if(corectness){
            output.innerHTML+= "<br>"+sex/*+"<br>"+dayofbirth*/;
        }
        else {
            output.innerHTML="";
        }
    }
    function fire() {
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
    if (checkname() && checksurname() && /*checkage() &&*/ checkemail() && checkdescription() && checkpesel()) {
        output.innerHTML+=formData.get('name')+"<br>"+formData.get('surname')+"<br>"+
        formData.get('age')+"<br>"+formData.get('email')+"<br>"+formData.get('description')
        +"<br>"+formData.get('birth')/*+"<br>"+formData.get('select')*/+"<br>"+formData.get('pesel');
        psl();
    }
    else {
        fire();
    }
};
