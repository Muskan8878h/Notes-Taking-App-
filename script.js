const addBtn = document.querySelector("#addbtn")
const main = document.querySelector("#main")



// to save the notes
const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    // console.log(notes);
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )
    // console.log(data);

    if(data.length === 0){
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
    
}


addBtn.addEventListener(
    "click",
    function() {
        addNote();
    }
)
// <div class="note">
//     <div class="tool">
//         <i class="fas fa-trash"></i>
//         <i class="fas fa-save"></i>
//     </div>
//     <textarea></textarea>
// </div>

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
        <i class="trash fas fa-trash"></i>
        <i class="save fas fa-save"></i>
    </div>
    <textarea> ${text} </textarea>
    `;

    // to delect the note
    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove();
        }
    )

    // to save the notes
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNotes();
        }
    )

    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNotes();
        }
    )
    // to add the note 
    main.appendChild(note); 
    saveNotes();
}


// when page load this function call automatically
(
    function(){ 
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        // console.log(lsnotes);
        if(lsnotes === null){
            addNote();
        }
        else{
            lsnotes.forEach(
                (lsnotes)=>{
                    addNote(lsnotes);
                }
            )
        }
        
       
    }
)()
