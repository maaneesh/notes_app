const addB8n = document.getElementById('add');

addB8n.addEventListener('click', () => addNewNote());

function addNewNote(){

    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML =`<div class="tools">
    <!-- EDIT -->
<button class="edit">
    <i class="fas fa-edit"></i>
</button>
<button class="delete">
    <i class="fas fa-trash-alt"></i>
</button>
</div>

<div class="hidden"></div>
<textarea></textarea>`;

//DELETE button

const deleteBtn = note.querySelector('.delete');
//delete functiion
deleteBtn.addEventListener('click', ()=>{
    note.remove();
})


document.body.appendChild(note);

}




////<div class= "main ${text ? " " : "hidden"}></div>
