export function fire() {
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