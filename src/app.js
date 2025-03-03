/*----------menu------------*/
const menuButtom = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
let hideTimeoutSidebar;
menuButtom.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
});
sidebar.addEventListener("mouseover", () => {
  sidebar.classList.add("expanded");
  clearTimeout(hideTimeoutSidebar);
});
sidebar.addEventListener("mouseleave", () => {
  hideTimeoutSidebar = setTimeout(() => {
    sidebar.classList.remove("expanded");
  }, 5000);
});
document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !menuButtom.contains(event.target)) {
    sidebar.classList.remove("expanded");
  }
});
/*----------user------------*/
const userMenu = document.querySelector(".user-menu");
const user = document.querySelector(".user");
//let hideTimeoutUserMenu;
user.addEventListener("click", () => {
  userMenu.classList.toggle("active");
});
/*userMenu.addEventListener("mouseover", () => {
  clearTimeout(hideTimeoutUserMenu);
});
userMenu.addEventListener("mouseleave", () => {
  hideTimeoutUserMenu = setTimeout(() => {
    userMenu.classList.remove("active");
  }, 5000);
});*/
document.addEventListener("click", (event) => {
  if (!user.contains(event.target) && !userMenu.contains(event.target)) {
    userMenu.classList.remove("active");
  }
});
