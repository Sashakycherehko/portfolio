let cursor = document.getElementById("container-cursor");
let outer_cursor = document.getElementById("container-cursor_outer");
console.log(cursor);

const CreateCursor = (e) => {
  e.preventDefault;
  cursor.style = `top: ${e.pageY - 5}px;left: ${e.pageX - 5}px`;
  outer_cursor.style = `top: ${e.pageY - 22.5}px;left: ${e.pageX - 22.5}px`;
};

const CreateClick = (e) => {
  e.preventDefault;
  console.log("work");
};
document.addEventListener("mousemove", CreateCursor);
