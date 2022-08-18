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
        let label= document.createElement('label');
        label.setAttribute('for',inputs[i].filterType);
        label.textContent=inputs[i].label;

        let items = document.createElement('div');
        items.setAttribute('class', 'form-item');

        let input = document.createElement(inputs[i].type);
        input.setAttribute("id",inputs[i].filterType);
        input.setAttribute('name', inputs[i].filterType);
        if(inputs[i].type != 'input') {
            let o1 = new Option('a-z/0-9','az'); 
            let o2 = new Option('z-a/9-0','za');
            input.appendChild(o1);
            input.appendChild(o2);  
        }
        else {
            input.setAttribute('type', inputs[i].inputType);
        }
        items.appendChild(label);
        items.appendChild(input);
        form.appendChild(items);
    }
    form.appendChild(submit);
    filters.appendChild(form);
    document.body.appendChild(filters);
}

export  function myfilters(myArray) {
    const formData = new FormData(form);
    let toFilter = myArray;
      if (formData.get('greater').length!=0){
      toFilter = toFilter.filter((row) => row.id > formData.get('greater'));
      }
      if (formData.get('less').length!=0){
        toFilter = toFilter.filter((row) => row.id < formData.get('less'));
      }
      if (formData.get('equal').length!=0){
        toFilter = toFilter.filter((row) => row.id == formData.get('equal'));
      }
      if (formData.get('includes').length!=0){
        toFilter = toFilter.filter(row => row.body.includes(formData.get('includes')) !== false);
      }
      if(formData.get('select') !== 'az') {
      toFilter = toFilter.reverse();
      }
      array=toFilter;
      console.log(array);
      return array;
};
