import axios from "axios";
const url = 'https://jsonplaceholder.typicode.com/posts/';
let greater = document.getElementById("greater");
let less = document.getElementById("less");
let equal = document.getElementById("equal");
let includes = document.getElementById("includes");
let myArray = []
const output = document.createElement("div");
    output.setAttribute("id", "output2");
function get() {
axios.get(url)
.then((response) => {
    myArray=response.data;
    for(let i=0;i<myArray.length;i++) {
      output.innerHTML += "User ID: "+myArray[i].userId+"<br>ID: "+myArray[i].id+"<br>Title: "
      +myArray[i].title+"<br>"+myArray[i].body+"<br><hr>";     
    }               
    document.body.appendChild(output);                                                                  
})
  .catch(error => {
    console.log(error)
  })
}
// function filter(myArray, fn) {
//   let toShow = []
//   for (let i =0;i<myArray.length;i++) {
//     const row = myArray[i]
//     if(fn(row)) {
//       toShow.push(row)
//     }
//   }
//   return toShow
// }
get();
  form.onsubmit = function(e){
    e.preventDefault();
    const formData = new FormData(form);
    let toFilter = myArray
      if (greater.value.length!=0){
      toFilter = toFilter.filter((row) => row.id > formData.get('greater'));
      }
      if (less.value.length!=0){
        toFilter = toFilter.filter((row) => row.id < formData.get('less'));
      }
      if (equal.value.length!=0){
        toFilter = toFilter.filter((row) => row.id == formData.get('equal'));
      }
      if (includes.value.length!=0){
        toFilter = toFilter.filter(row => row.body.includes(formData.get('includes')) !== false);
      }
      if(formData.get('select') !== 'az') {

      toFilter = toFilter.reverse();
      }
      output.innerHTML="";
      for(let i=0;i<toFilter.length;i++) {
        output.innerHTML += "User ID: "+toFilter[i].userId+"<br>ID: "+toFilter[i].id+"<br>Title: "
        +toFilter[i].title+"<br>"+toFilter[i].body+"<br><hr>";     
      } 
      toFilter = toFilter.map(row => console.log(row.userId, row.id, row.title, row.body));    
    };
