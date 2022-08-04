import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/posts/';
function get(url) {
axios.get(url)
.then((response) => {
    const output = document.createElement("div");
    output.setAttribute("id", "output2");
    const object=response.data;
    let str = JSON.stringify(object);
    const myArray = str.split("{");
    console.log(myArray);
    for(let i=1;i<myArray.length;i++) {
      output.innerHTML += myArray[i]+"<br>";     
    }               
    document.body.appendChild(output);                                                                  
    console.log(object);
})
  .catch(error => {
    console.log(error)
  })
}
get(url);


/*
let sortab = array.sort((id1, id2) => id1.population - id2.population);
let sortba = array.sort((id1, id2) => id2.population - id1.population);
console.log(array);
*/