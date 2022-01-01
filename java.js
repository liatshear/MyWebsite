var i = 0;
var txt = 'Welcome to my website'; 
var speed = 50;
// typewriter function
function typeWriter() {
  // checks the length of the input text
  if (i < txt.length) {
    document.getElementById("welcome").innerHTML += txt.charAt(i);
    i++;
    // using the timer types out the letters
    setTimeout(typeWriter, speed);
  }
}
//fucntion to alert little quirks in the website using alert
function onPressed(){
  alert('Yay!');
  }
  function onCall(){
  alert('Please no prank calls!');
  }
  const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function checkit() {
  //checks if all fields have been left empty
  if ((document.forms['frm'].question.value === "") && (document.forms['frm'].Email.value === "")) {
    alert("Certain fields have been left empty");
    return false;
  } 
  // this function checks if the usename input was empty
  if (document.forms['frm'].question.value === "") {
    alert("Username has been left empty");
    return false;
  } 
  //checks if the username contains a digit
    var re = /^[A-Za-z]+$/;
    if(!re.test(document.forms['frm'].question.value)){
       alert("Username contains a digit/s");  
       return false;
  }
  // else it returns true if no digits and not empty
  if(document.forms['frm'].question.va){
  return true;
  }
  // now checks if email field has been left empty
  if (document.forms['frm'].Email.value === "") {
    alert("Email has been left empty");
    return false;
  } 
  // if not empty and valid then go to email
  if(document.forms['frm'].Email.va){
    return true;
  }
  // make sure the message doesnt use upper case letters
  var cap = /^[A-Z]+/;
  if(!re.test(document.forms['frm'].Message.value)){
     alert("Please dont use uppercase letters");  
     return false;
  } 
  //else return true
  if(document.forms['frm'].Message.va){
    return true;
    }


}

