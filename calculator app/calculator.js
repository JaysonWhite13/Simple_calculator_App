
const userInput = document.getElementById('space');
var num = "";

function past(a){
     num += a;
    document.getElementById('space').value = num;
    
}

function rest(){
    document.getElementById('space').value =  eval(num);
    num = "";
}

function reset(){
    num ="";
    document.getElementById('space').value = num;
}
