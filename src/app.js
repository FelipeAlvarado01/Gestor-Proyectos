const menuButtom = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

menuButtom.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
});

const iconsMenu = document.querySelectorAll(".option li");
iconsMenu.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    sidebar.classList.toggle("expanded");
  });
});

const userMenu = document.querySelector(".user-menu");
const user = document.querySelector(".user");

user.addEventListener("click", () => {
  userMenu.classList.toggle("active");
});
