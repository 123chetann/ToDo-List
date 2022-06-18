const form = document.querySelector('form')
const input = document.querySelector('input')
const list = document.querySelector('ul')



//ev represent submit event
form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    todo();
    input.value = '';
})

function todo(){
    const value = input.value;
    if(value == ""){
        alert("can't be blank")
    }
    else{
    const lst = document.createElement("li");
    const dbtn = document.createElement("button")
    dbtn.textContent = "Delete"
    lst.textContent = value;
    list.append(lst)
    lst.append(' ',dbtn)
    }
}
list.addEventListener('click',(e)=>{
    if(e.target.nodeName === 'BUTTON'){
        e.target.closest('Li').remove();
    }
})