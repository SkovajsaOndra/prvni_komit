let number = 0;
const numberElement = document.getElementById("number");
//funkce
//pridat
function pridat(){
number++;
numberElement.innerHTML = number;
if(number > 0) {
    numberElement.style.color = "green"
  } else if (number == 0){
    numberElement.style.color = "black"   
    }
}
//resetovat
function resetovat(){
number=0;
numberElement.innerHTML = number;
if (number == 0){
numberElement.style.color = "black"   
}
//ubrat
}
function ubrat(){
number--;
numberElement.innerHTML = number;
if(number < 0) { 
    numberElement.style.color = "red"
  } else if (number == 0){
    numberElement.style.color = "black"   
    }
}



  

  
    

