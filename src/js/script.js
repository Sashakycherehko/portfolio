const CreateButtonNavigation = () => {
  let navigation = document.querySelector(".info-navigation");
  let innerHeight = window.innerHeight;
  let innerWidth = window.outerWidth;
  console.log(innerWidth, navigation.getBoundingClientRect());
  navigation.style = `left: ${innerWidth}px`;
};
// document.addEventListener("keypress", (e) => {
//   e.preventDefault;
//   switch (e.key) {
//     case "w":
//     case "ц":
//       document.body.classList.toggle("active");
//   }
// });

window.addEventListener("resize", CreateButtonNavigation);
