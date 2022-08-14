let cursor = document.getElementById("container-cursor");
let outer_cursor = document.getElementById("container-cursor_outer");

const CreateCursor = (e) => {
  let pageY = e.pageY;
  let pageX = e.pageX;
  e.preventDefault;
  cursor.style = `top: ${pageY - 5}px;left: ${pageX - 5}px`;
  outer_cursor.style = `top: ${pageY - 22.5}px;left: ${pageX - 22.5}px`;
};

document.addEventListener("mousemove", CreateCursor);
