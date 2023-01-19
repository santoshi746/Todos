const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const generate = todo =>{
const html = `
<li class="list-group-item d-flex bg-secondary align-items-center justify-content-between text-dark ">
        <span class="text-left">${todo}</span>
        <i class="bi bi-trash delete"></i>
      </li>
`;
list.innerHTML += html;
};
addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
        generate(todo);
        addForm.reset(); 
    }
});

// deleting the todo

list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filter = (term)=>{
        Array.from(list.children)
        .filter((todo)=> !todo.textContent.includes(term))
        .forEach((todo)=>todo.classList.add('filtered'));

        Array.from(list.children)
        .filter((todo)=> todo.textContent.includes(term))
        .forEach((todo)=>todo.classList.remove('filtered'));
};
//keyup 
search.addEventListener('keyup',()=>{
    const term = search.value.trim();
    filter(term);
});