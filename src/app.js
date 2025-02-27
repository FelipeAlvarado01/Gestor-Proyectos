const menuButtom = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
menuButtom.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
/*menuButtom.addEventListener("mouseout", () => {
  sidebar.classList.remove("active");
});*/

const userMenu = document.querySelector(".user-menu");
const user = document.querySelector(".user");

user.addEventListener("click", () => {
  userMenu.classList.toggle("active");
});
