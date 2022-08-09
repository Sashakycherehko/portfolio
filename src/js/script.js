const wr = document.querySelector(".navigation");

document.addEventListener("keypress", (e) => {
  e.preventDefault;
  switch (e.key) {
    case "w":
      document.body.classList.toggle("active");
  }
});
