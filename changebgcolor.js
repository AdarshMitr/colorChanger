const btns = document.querySelectorAll(".color-btn");
const body = document.querySelector("body");
// const textcolor=document.querySelector('.para');

btns.forEach((btn) => {
  // console.log(btn)

  btn.addEventListener("click", function (e) {
    //console.log(e.target.id)
    body.style.backgroundColor = e.target.id;
  });
  btn.addEventListener("click", function (f) {
    //console.log(e.target.id)
    if (f.target.id == "white" || f.target.id == "yellow") {
      body.style.color = "black";
    } else {
      body.style.color = "white";
    }
  });
});
