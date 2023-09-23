const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    if (!e.target.checkValidity()) {
      e.target.style.border = "1px solid red";
      e.preventDefault();
    } else {
      e.target.style.border = "1px solid green";
    }
  });
});
