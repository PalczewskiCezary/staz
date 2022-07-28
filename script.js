const form = document.getElementById('form');
const output = document.getElementById("output");
form.onsubmit = function(e){
    e.preventDefault();
    const formData = new FormData(form);
    
    const stringRE = new RegExp('[A-Za-z]+');
    const mailRE = new RegExp('.+@.+');
    const intRE = new RegExp('^[0-9]+$');
   
    const variable = stringRE.test(formData.get('name'));
    const variable2 = stringRE.test(formData.get('surname'));
    const variable3 = intRE.test(formData.get('age'));
    const variable4 = mailRE.test(formData.get('email'));
    const variable5 = stringRE.test(formData.get('description'));
   
    if (variable && variable2 && variable3 && variable4 && variable5) {
        
        output.innerHTML+=formData.get('name')+"<br>"+formData.get('surname')+"<br>"+
        formData.get('age')+"<br>"+formData.get('email')+"<br>"+
        formData.get('description')+"<br>"+formData.get('select');
    }
    else {
        const alertbg = document.getElementById("alertbg");
        alertbg.style.display = "flex";
        const btn = document.createElement("button");
        btn.textContent="OK"
        const alert = document.getElementById("alert");
        const p = document.createElement("p");
        p.textContent="Proszę poprawnie wprowadzić dane!"
        const img = document.createElement("img")
        img.src = "https://www.computerhope.com/jargon/e/error.png";
        alert.appendChild(img);
        alert.appendChild(p)
        alert.appendChild(btn)
        btn.onclick  = function(){
            alertbg.style.display = "none";
            alert.innerHTML="";
        }
    }
};
