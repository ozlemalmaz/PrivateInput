const input = document.querySelector(".input_field");
const inputIcon = document.querySelector(".input_icon");

inputIcon.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.getAttribute("type") === "password") {
    inputIcon.setAttribute("src", "closeeyeicon.svg");
    input.setAttribute("type", "text");
  } else {
    inputIcon.setAttribute("src", "openeyeicon.svg");
    input.setAttribute("type", "password");
  }
});

/*gorunum = !gorunum

    let type = 'password'

    if (gorunum){
        type = 'text'
    }

    input.type = type*/
