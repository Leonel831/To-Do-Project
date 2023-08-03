var buttonClick = document.getElementById('submit');

buttonClick.addEventListener("click", storeOutput);


const aBox = document.getElementById('aBox');

function storeOutput(event){
   event.preventDefault();
   let question = document.getElementById('question').value;
    let output = document.getElementById('output');

    if(question.length == 0){
        output.style.color = "red";
        output.innerHTML = "You Wrote Nothing";
    }
    else if(question.length != 0){
        const newLine = document.createElement("li");
        const newDiv = document.createElement("div");
        const newBtn = document.createElement("button");
        newBtn.innerText = "X";
        newBtn.type = "submit";
        newBtn.name = "button";
        newLine.setAttribute("class","myBox");
        newBtn.setAttribute("class","aBtn");
        newDiv.appendChild(newLine);
        newLine.innerText = question;
        document.body.appendChild(newDiv);
        newLine.appendChild(newBtn);
        newLine.style.color = "black";
        output.innerHTML = '';
        newBtn.addEventListener("click",eraseBtn);

        document.getElementById('question').value = '';
    }
}

function eraseBtn(){
    const newLine = this.parentNode; 
  newLine.parentNode.removeChild(newLine);
}
// create element for button
// push/append insde the "li"
//  make function that removes li

// <ul>  <div>  <li>  </li>     </div> </ul>
//reference to prarent node



 // newLine.style.backgroundColor = "#e1ad01";
