let main = document.querySelector(".main");
let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "crimson") {
      main.style.backgroundColor = "green";
      button.remove();
    }
    if (event.target.id === "salmon") {
      main.style.backgroundColor = event.target.id;
      button.remove();
    }
    if (event.target.id === "yellow") {
      main.style.backgroundColor = event.target.id;
      button.remove();
    }
    if (event.target.id === "black") {
      main.style.backgroundColor = event.target.id;
      button.remove();
    }
    console.log(event.target.id);
  });
});
let msg = document.createElement("msg");
msg.innerText = "Thank YOu";
msg.id = "msg"
let p = document.querySelector("p");

p.addEventListener("click", () => {
  p.style.color = "#000";
  p.remove();
  document.querySelector(".main").appendChild(msg);

  main.style.backgroundColor = "#fff";
});
