const nameField = document.querySelector("#name");
const otherJobInput = document.querySelector("#other-job-role");

window.addEventListener("load", (event) => { //on page load -
    nameField.focus(); //name field is focused
    otherJobInput.setAttribute("type","hidden"); //sets other job input not visible by default
  });
//testing this.........
