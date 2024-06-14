const display = document.getElementById("Display");
function dependToDisplay(input){
    display.value += input
}
function clearDisplay(){
    display.value = "";
}
function Calculate(){
try{
    display.value = eval(display.value);
}
catch(error){
    display.value = "error"
}
}