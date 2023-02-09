function formdata(){

    var notes = document.getElementById("textbox").value;

    if(notes.includes("vegan") || notes.includes("Vegan")){
        //return anti-vegan warning
        alert("WARNING!\nCheescake contains dairy.");
    } else {
        var dropDown = document.getElementById("selection").value;
        var radioButt = document.getElementById("radio").value;

        dropDown = "Number of Pieces: " + dropDown
        radioButt = "Topping: " + radioButt
        notes = "Notes: \n" + notes

        //establish a new Div
        var div = document.createElement("div");
        var space = document.createElement("br");

        //create and add new title
        var title = document.createElement("h2");
        title.innerHTML = "Thank You! Your order has been Placed.";
        div.appendChild(title);

        var subTitle = document.createElement("h3");
        subTitle.innerHTML = "Order Details:";
        div.appendChild(subTitle);

        //add order details
        var numPieces = document.createTextNode(dropDown);
        numPieces.innerHTML = dropDown;
        div.appendChild(numPieces);
        div.appendChild(space);

        var topping = document.createTextNode(topping);
        topping.innerHTML = topping;
        div.appendChild(topping);
        div.appendChild(space);

        var orderNotes = document.createTextNode(notes);
        orderNotes.innerHTML = notes;
        div.appendChild(orderNotes);

        //call replacement function
        removeStuff(div);
    }

}
//function for removing elements
function removeStuff(newDiv){
    const element1 = document.getElementById('div-1');
    const element2 = document.getElementById('div-2');
    element1.replaceWith(newDiv);
    element2.remove();
}
