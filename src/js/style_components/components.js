const div = [
  {
    div: `
      height: 100vh;
      background: #000;
      width: 100%;
      display: flex;
      `,
  },
];

const CreateWindow = (components) => {
  let block = document.createElement("div");
  block.style = components[0].div;
  document.body.appendChild(c);
};
