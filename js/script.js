let input = document.querySelector("#input-text");
let add = document.querySelector("#add");
const main = document.querySelector("main");

add.addEventListener("click", function() {
    const dive = document.createElement("div");
    dive.classList.add("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const noteText= document.createElement("span");
    noteText.textContent = input.value;
    noteText.classList.add("note-text");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");

    deleteButton.addEventListener("click", function() {
        main.removeChild(dive);
    });

    checkbox.addEventListener("change",function(){
        if(checkbox.checked){
            noteText.style.textDecoration = "line-through";
        }
    });

    dive.appendChild(checkbox);
    dive.appendChild(noteText);
    dive.appendChild(deleteButton);
    main.appendChild(dive);

    // Clear the input field after adding the note
    input.value = '';
    
    
   });
