var i = 0;
var txt = 'Welcome to my website'; 
var speed = 50;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "x") {
      alert("Name must be filled out");
      return false;
    }
}
function onPressed(){
  alert('Yay!');
  }
  function onCall(){
  alert('Please no prank calls!');
  }
  const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function IsEmpty() {
  if (document.forms['frm'].question.value === "") {
    alert("empty");
    return false;
  }
  return true;
}
