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
        const label= document.createElement('label');
        label.setAttribute('for',inputs[i].filterType);
        label.textContent=inputs[i].label;

        const items = document.createElement('div');
        items.setAttribute('class', 'form-item');

        const input = document.createElement(inputs[i].type);
        input.setAttribute("id",inputs[i].filterType);
        input.setAttribute('name', inputs[i].filterType);
        if(inputs.type != 'input') {
            let select = document.getElementById('select');
            let o1 = document.createElement('option');
            o1.setAttribute('value', 'az');
            o1.textContent="a-z/0-9";
            let o2 = document.createElement('option');
            o2.setAttribute('value', 'za');
            o2.textContent="z-a/9-0";
            select.appendChild(o1);
            select.appendChild(o2);
        }
        else {
            input.setAttribute('type', inputs[i].inputType);
        }
        items.appendChild(label);
        items.appendChild(input);
        filters.appendChild(items);
    }
    filters.appendChild(form);
    document.body.appendChild(filters);
}