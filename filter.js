let array = []
export function createFilters(inputs) {
  const filters = document.createElement("div");
  filters.setAttribute('id', 'filters');

  const form = document.createElement("form");
  form.setAttribute('id', 'form');

  const submit = document.createElement("button");
  submit.setAttribute('id', 'btn');
  submit.setAttribute('name', 'button');
  submit.setAttribute('type', 'submit');
  submit.textContent='Wyślij';
  for (let i=0;i<inputs.length;i++){
      let items = document.createElement('div');
      items.setAttribute('class', 'form-item');

      let label= document.createElement('label');
      label.setAttribute('for',inputs[i].name);
      label.textContent=inputs[i].label;

      let input = document.createElement(inputs[i].type);
      input.setAttribute("id",inputs[i].name);
      input.setAttribute('name', inputs[i].name);
      input.setAttribute('type', inputs[i].inputType);
      
      items.appendChild(label);
      items.appendChild(input);
      form.appendChild(items);
  }
  let label= document.createElement('label');
  label.setAttribute('for','idSelect');
  label.textContent='Sortowanie';

  let input = document.createElement('select');
  input.setAttribute("id",'idSelect');
  input.setAttribute('name', 'idSelect');
  let o1 = new Option('a-z/0-9','az'); 
  let o2 = new Option('z-a/9-0','za');

  let items = document.createElement('div');
  items.setAttribute('class', 'form-item');
  
  input.appendChild(o1);
  input.appendChild(o2); 
  items.appendChild(label);
  items.appendChild(input);
  form.appendChild(items);
  form.appendChild(submit);
  filters.appendChild(form);
  document.body.appendChild(filters);
}
export  function myfilters(myArray, inputs) {
    const formData = new FormData(form);
    let toFilter = myArray;
    for (let i=0;i<inputs.length;i++) {
      const input = inputs[i];
      if((formData.get(input.name) || '').length!=0){
        if (input.filterType =='greater') {
        toFilter = toFilter.filter((row) => row.id > formData.get(input.name));
        }
        if (input.filterType =='less') {
        toFilter = toFilter.filter((row) => row.id < formData.get(input.name));
        }
        if (input.filterType =='equal') {
          toFilter = toFilter.filter((row) => row.id == formData.get(input.name));
          }
        if (input.filterType =='includes') {
            toFilter = toFilter.filter((row) => row.body.includes(formData.get(input.name)));
        }
      }  
    }
      if(formData.get('idSelect') != 'az') {
      toFilter = toFilter.reverse();
      }
      array=toFilter;
      console.log(array);
      return array;
};
