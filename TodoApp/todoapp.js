const addItemBtn = document.getElementById("add-item-button");
addItemBtn.addEventListener("click", function () {
    const item = document.getElementById("item");
    if (item.value.trim() === "") { return; }
    // Create unit div
    const div = document.createElement("div");
    div.className = "unit";
    // Create text
    const text = document.createElement("span");
    text.innerText = item.value;
    // Create Edit button 
    const editBtn = document.createElement("button"); 
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", function () { 
        const newValue = prompt("Edit item:", text.innerText); 
            if (newValue !== null && newValue.trim() !== "") { 
               text.innerText = newValue; 
            } 
        }
    ); 
    // // Create Delete button 
    const deleteBtn = document.createElement("button"); 
    deleteBtn.innerText = "Delete"; 
      deleteBtn.addEventListener("click", function () { 
        div.remove(); 
    }); 
    // // Add everything to unit 
    div.appendChild(text); 
    div.appendChild(editBtn); 
    div.appendChild(deleteBtn); 
    // // Add unit to page 
    document.body.appendChild(div); 
    // Clear input 
    item.value = "";
});