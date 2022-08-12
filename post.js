import axios from "axios";
const url = 'https://jsonplaceholder.typicode.com/posts/';
let greater = document.getElementById("greater");
let less = document.getElementById("less");
let from = document.getElementById("from");
let to = document.getElementById("to");
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
    if(formData.get('select') === 'az') {
      if (greater.value.length!=0){
      toFilter = toFilter.filter((row) => row.id > formData.get('greater'));
      }
      if (less.value.length!=0){
        toFilter = toFilter.filter((row) => row.id < formData.get('less'));
      }
      if (from.value.length!=0 && to.value.length!=0){
        toFilter = toFilter.filter((row) => row.id > formData.get('from') && row.id < formData.get('to'));
      }
      if (equal.value.length!=0){
        toFilter = toFilter.filter((row) => row.id == formData.get('equal'));
      }
      if (includes.value.length!=0){
        toFilter = toFilter.filter(row => row.body.includes(formData.get('includes')) !== false);
      }
      toFilter = toFilter.sort((a, b) => a.id - b.id);
      toFilter = toFilter.map(row => console.log(row.userId, row.id, row.title, row.body));
    }
    else {
      if (greater.value.length!=0){
        toFilter = toFilter.filter((row) => row.id > formData.get('greater'));
        }
        if (less.value.length!=0){
          toFilter = toFilter.filter((row) => row.id < formData.get('less'));
        }
        if (from.value.length!=0 && to.value.length!=0){
          toFilter = toFilter.filter((row) => row.id > formData.get('from') && row.id < formData.get('to'));
        }
        if (equal.value.length!=0){
          toFilter = toFilter.filter((row) => row.id == formData.get('equal'));
        }
        if (includes.value.length!=0){
          toFilter = toFilter.filter(row => row.body.includes(formData.get('includes')) !== -1);
        }
      toFilter = toFilter.sort((a, b) => a.id - b.id);
      toFilter = toFilter.reverse();
      toFilter = toFilter.map(row => console.log(row.userId, row.id, row.title, row.body));    
    }
};
