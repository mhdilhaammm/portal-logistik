const sideBar = document.querySelector(".navbar-list");
// sidebar menu
document.querySelector("#menu").onclick = (e) => {
  sideBar.classList.toggle("active");
  sideBar.focus();
  e.preventDefault();
};

// prevent default untuk menghilangkan sidebar
const hamburgerMenu = docume.querySelector("#menu");
docume.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !sideBar.contains(e.target)) {
    sideBar.classList.remove("active");
  }
});
