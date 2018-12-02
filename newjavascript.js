/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//


//function dodaj(){
//  var nowy = document.createElement("li");
//  ul.appendchild(nowy);
//  var tekst = document.getElementById("zadanie");
// nowy.appendChild(tekst);
// }
document.forms.myform.onsubmit = function () {
    if (this.zadanie.value) {
        var li = document.createElement("LI");
        li.innerHTML = this.zadanie.value;
        document.getElementById("lista").appendChild(li);
        this.zadanie.value = "";
        this.zadanie.focus();
       li.onclick = usun
       li.contentEditable="true"
       //let zrobione = document.createElement("input")
       //li.appendChild(zrobione)
       
    }
    return false;
}

function usun(){
    alert("Czy usunąc?")
    this.parentNode.removeChild(this);
}


