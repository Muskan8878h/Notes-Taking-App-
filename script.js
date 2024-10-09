const addBtn = document.querySelector("#addbtn")

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
const addNote = () => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
        <i class="fas fa-trash"></i>
        <i class="fas fa-save"></i>
    </div>
    <textarea></textarea>
    `;
}