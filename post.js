import axios from "axios";
const url = 'https://jsonplaceholder.typicode.com/posts/';
function get(url) {
axios.get(url)
.then((response) => {
    const output = document.createElement("div");
    output.setAttribute("id", "output2");
    const myArray=response.data;
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
get(url);
  form.onsubmit = function(e){
    e.preventDefault();
    const formData = new FormData(form);
    axios.get(url)
      .then((response) => {
        const myArray=response.data;
        if(formData.get('select') === 'az') {
          myArray.filter(ids => ids.id > formData.get('greater'));
          myArray.filter(ids => ids.id < formData.get('less'));
          myArray.filter(ids => ids.id > formData.get('from') && ids.id < formData.get('to'));
          myArray.filter(ids => ids.id = formData.get('equal'));
          myArray.includes(formData.get('includes'))
          myArray.sort((a, b) => a.myArray.id - b.myArray.id);
          myArray.map(output.innerHTML=myArray);
        }
        else {
          myArray.filter(ids => ids.id > formData.get('greater'));
          myArray.filter(ids => ids.id < formData.get('less'));
          myArray.filter(ids => ids.id > formData.get('from') && ids.id < formData.get('to'));
          myArray.filter(ids => ids.id = formData.get('equal'));
          myArray.includes(formData.get('includes'))
          myArray.sort((a, b) => a.myArray.id - b.myArray.id);
          myArray.reverse();
          myArray.map(output.innerHTML=myArray);
          
        }
      })
      .catch(error => {
        console.log(error)
      })
};
