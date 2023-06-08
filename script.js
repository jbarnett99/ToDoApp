// Listening for a click of the add button. When clicked, grabing the content from task-input

document.getElementById("add-button").addEventListener("click", function(){
   
   //Gathering content from the textbox
    let value = document.getElementById("task-input").value;

    //if there is content, add content and reset the box to blank
    if(value){
        addItem(value);
        document.getElementById("task-input").value = "";
    }
})

//Listening for the enter key. When clicked, grabing the content from task-input
document
.getElementById("task-input")
.addEventListener("keypress", function (e){
    if (e.key === "Enter"){

        //Gathering content in the textbox
        let value = document.getElementById("task-input").value;
        
         //if there is content, add content and reset the box to blank
        if(value){
            addItem(value);
            document.getElementById("task-input").value = "";
        }
    }
})

//Adding new list item
function addItem(value) {

    //Assigns a variable called list
    //<ui id="list"> <ui>
    let list = document.getElementById("list");

    //Creating a li (list) element to HTML
    //<li></li>
    let item = document.createElement("li");

    //Add the class "item" to the element to match the HTML
    item.classList.add("item")

    //Adding Checkbox for the item. Creating an input element 
    let checkbox = document.createElement("input");
    
    //Add the type checkbox to the element
    checkbox.type = "checkbox";

    //Add class of checkbox
    checkbox.classList.add("checkbox");
    
    
    //Listening for a change of the checkbox value. Check will toggle on the class line-through for the CSS file and vice versa.
    checkbox.addEventListener("change", function (){ 
        taskContent.classList.toggle("line-through")
    });

    //Create the space the new content will go. Using Span (instead of div) so it doesn't take up the full width of the page.
    let taskContent = document.createElement("span");
    
    //Creating class for CSS
    taskContent.classList.add("task-content")
    
    //Places the value into the text box
    taskContent.innerText = value;
    
    //Creating delete button
    let deleteButton = document.createElement("button");

    //Adding class to the button
    deleteButton.classList.add("delete-button")

    //Adding text to the button
    deleteButton.innerText = "Remove";

    //Listening for the click of the delete button
    deleteButton.addEventListener("click", function(){
        
        //removing the element from the list
        list.removeChild(item);
    })

    //Compiling the content from the function above to be added to the webpage
    item.appendChild(checkbox);
    item.appendChild(taskContent);
    item.appendChild(deleteButton);

    //Added the content to the webpage or application
    list.appendChild(item);
}

