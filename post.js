import axios from "axios";
import { createFilters, myfilters } from "./filter";
const inputs =     [
  {
      label: 'ID wieksze niż',
      type: 'input',
      name: 'idGreater',
      filterType: 'greater',
      inputType: 'number',
  },
  {
      label: 'ID mniejsze niż',
      type: 'input',
      name: 'idLess',
      filterType: 'less',
      inputType: 'number',
  },
  {
      label: 'ID jest równe',
      type: 'input',
      name: 'idEqual',
      filterType: 'equal',
      inputType: 'number',
  },
  {
      label: 'Tekst zawiera',
      type: 'input',
      name: 'idIncludes',
      filterType: 'includes',
      inputType: 'text',
  },
]
createFilters(inputs);
const url = 'https://jsonplaceholder.typicode.com/posts/';
let array = []
let myArray = []
let output = document.createElement("div");
output.setAttribute("id", "output2");
function display(array) {
      for(let i=0;i<array.length;i++) {
        output.innerHTML += "User ID: "+array[i].userId+"<br>ID: "+array[i].id+"<br>Title: "
        +array[i].title+"<br>"+array[i].body+"<br><hr>";   
        document.body.appendChild(output);  
      } 
    }
function get() {
axios.get(url)
.then((response) => {
    myArray=response.data;
    array=myArray;
    display(array);                                                                          
})
  .catch(error => {
    console.log(error)
  })
}
get();
  form.onsubmit = function(e){
    e.preventDefault();
      output.innerHTML="";
      display(myfilters(myArray, inputs));
    };
