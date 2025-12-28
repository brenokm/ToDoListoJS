//seleçao de elementos
const toDoForm = document.querySelector("#toDoForm")
const toDoInput = document.querySelector("#toDoInput")
const toDoList = document.querySelector("#toDoList")
const editForm = document.querySelector("#editForm")
const editInput = document.querySelector("#editInput")
const cancelEditBtn = document.querySelector("#cancelEditBtn")
let oldInputValue
//funçoes

function saveToDo(texto){
   const toDoDiv = document.createElement("div")
   toDoDiv.classList.add("toDo")
   toDoList.appendChild(toDoDiv)

   const toDoText = document.createElement("h3")
   toDoText.innerText = texto
    toDoDiv.appendChild(toDoText)


   const btnDone = document.createElement('button')
   btnDone.classList.add('finishToDo')
   btnDone.innerHTML = '<i class="fa-solid fa-check"></i>'
   toDoDiv.appendChild(btnDone)

   const btnEdit = document.createElement('button')
   btnEdit.classList.add('editToDo')
   btnEdit.innerHTML = ' <i class="fa-solid fa-pen"></i>'
   toDoDiv.appendChild(btnEdit)

   const btnDelete = document.createElement('button')
   btnDelete.classList.add('removeToDo')
   btnDelete.innerHTML = '<i class="fa-solid fa-xmark"></i>'
   toDoDiv.appendChild(btnDelete)
  
   toDoInput.value= ""
   toDoInput.focus()
}

const toggleForms = ()=>{
   // editForm.classList.toggle('hide') 4536
    toDoForm.classList.toggle('hide')
    toDoList.classList.toggle('hide')
}
const updateToDo = (texto)=>{

    const toDos = document.querySelectorAll('.toDo')

    toDos.forEach((toDo)=>{
        let toDoTitl= toDo.querySelector('h3')

        if(toDoTitl.innerText === oldInputValue){
            toDoTitl.innerText = texto
        }
    }  )
}


//eventos


toDoForm.addEventListener('submit', (e)=>
{
    e.preventDefault();      
    const inputValue = toDoInput.value
    if(inputValue){
    saveToDo(inputValue)}
})

document.addEventListener('click', (e)=>{
    const botao = e.target
    const parentDiv = botao.closest('div')
    //closest serve para procurar o ancestral mais próximo de um elemento(nesse caso, procurar o cancestral div mais proximo do filho botao)
    let toDoTitle 

    if(parentDiv && parentDiv.querySelector('h3')){
        toDoTitle = parentDiv.querySelector('h3').innerText
    }

    if(botao.classList.contains("finishToDo")){parentDiv.classList.toggle('done')}
    if(botao.classList.contains('removeToDo')){parentDiv.remove()}
    if(botao.classList.contains('editToDo')){toggleForms();
        editInput.value = toDoTitle;
        oldInputValue = toDoTitle
    }

    cancelEditBtn.addEventListener('click',(e)=>{
        e.preventDefault()
        toggleForms();
        
    })
  
    editForm.addEventListener('submit', (e)=>{
        e.preventDefault()
     
        editInputValue = editInput.value
        if(editInputValue){
            updateToDo(editInputValue)
        }

        toggleForms()
    })












})
