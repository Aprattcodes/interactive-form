const nameField = document.querySelector("#name");
const otherJobInput = document.querySelector("#other-job-role");
const jobRoleSelect = document.querySelector("#title");
const tColorSelect = document.querySelector("#color");
const tDesignSelect = document.querySelector("#design");

//events on page load
window.addEventListener("load", (event) => {
    nameField.focus(); //name field is focused
    otherJobInput.style.display = "none";//sets other job input not visible by default
    tColorSelect.setAttribute("type","hidden");//sets tshirt color select not visible by default
  });

//toggle other job role input visibility with other option selected
jobRoleSelect.addEventListener("input", (event) => { //this is not working
    const jobRole = document.getElementById("title");
    let selectedJobRole  = jobRole.value;
        if (selectedJobRole === "other") {
            otherJobInput.style.display = "block";
        } else {
            otherJobInput.style.display = "none";
        }
    });

//Tshirt info selection
tDesignSelect.addEventListener("change", (event) => { //listens for changes when selected
    if (tDesignSelect.value === true) {
        //tColorSelect.setAttribute("type","none");
        console.log('test')
    } else {
        tColorSelect.setAttribute("type","hidden");
    }
});