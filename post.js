import axios from "axios";
import { createFilters } from "./filter";
const inputs =     [
  {
      label: 'ID wieksze niż',
      type: 'input',
      name: 'id',
      filterType: 'greater',
      inputType: 'number'
  },
  {
      label: 'ID mniejsze niż',
      type: 'input',
      name: 'id',
      filterType: 'less',
      inputType: 'number'
  },
  {
      label: 'ID jest równe',
      type: 'input',
      name: 'id',
      filterType: 'equal',
      inputType: 'number'
  },
  {
      label: 'Tekst zawiera',
      type: 'input',
      name: 'id',
      filterType: 'includes',
      inputType: 'text'
  },
  {
      label: 'Sortowanie',
      type: 'select',
      name: 'id',
      filterType: 'select',
      inputType: 'select',
  }
]
createFilters(inputs);
const url = 'https://jsonplaceholder.typicode.com/posts/';
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
