let body = document.body;

document.addEventListener("wheel", (e) => {
  let dir = Math.sign(e.deltaY);
  console.log(dir);
});
