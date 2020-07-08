//create card
function createNote( noteTitle,noteBody){

    document.getElementById("no-notes").classList.add("hidden");

    let li= document.createElement("li");    count-=1;

    let a= document.createElement("a");
    let h2= document.createElement("h2");
    let p= document.createElement("p");
    let xButton= document.createElement("xButton")

    xButton.classList.add("delete");

    let xText= document.createTextNode("X");
    let h2TN = document.createTextNode(noteTitle);
    let pTN = document.createTextNode(noteBody);

    h2.appendChild(h2TN);
    p.appendChild(pTN);
    xButton.appendChild(xText);

    a.appendChild(h2);
    a.appendChild(xButton);
    a.appendChild(p);
    a.setAttribute("href","#");

    li.appendChild(a)
    document.getElementById("notes").appendChild(li);

   

}

//main function to create notes
function createNoteFromInput(e){
 e.preventDefault();

 let noteTitle = document.getElementById("new-note-title-input").value;
 let noteBody= document.getElementById("new-note-body-input").value;

 document.getElementById("new-note-title-input").value="";
 document.getElementById("new-note-body-input").value="";

 createNote( noteTitle,noteBody);
}
//delete notes
function removeItem(e){
    //console.log("clickeed!");
    if(e.target.classList.contains("delete")){
        // console.log("delete");
        if(confirm("Are you sure?")){
            let li= e.target.parentElement.parentElement;
            let ul=document.getElementById("notes");
            ul.removeChild(li);
        }

    }
}
//event lintener
document
  .getElementById("inputForm")
  .addEventListener("submit",createNoteFromInput,false);

document.getElementById("notes"),addEventListener("click",removeItem);
