import axios from "axios";
const url = 'https://jsonplaceholder.typicode.com/posts/';
let greater = document.getElementById("greater");
let less = document.getElementById("less");
let equal = document.getElementById("equal");
let includes = document.getElementById("includes");
let array = []
let myArray = []
const output = document.createElement("div");
    output.setAttribute("id", "output2");
    function display(array) {
      for(let i=0;i<array.length;i++) {
        output.innerHTML += "User ID: "+array[i].userId+"<br>ID: "+array[i].id+"<br>Title: "
        +array[i].title+"<br>"+array[i].body+"<br><hr>";     
      } 
    }
function get() {
axios.get(url)
.then((response) => {
    myArray=response.data;
    array=myArray;
    display(array);           
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
      array=toFilter;
      display(array);
      toFilter = toFilter.map(row => console.log(row.userId, row.id, row.title, row.body));    
    };
