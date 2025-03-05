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

/*----------create new project------------*/
const createProject = document.querySelector(".add-button");
const newProject = document.querySelector(".add-project");

createProject.addEventListener("click", () => {
  newProject.classList.toggle("active");
});

const closePanelCreateProject = document.querySelector(".close-button");

closePanelCreateProject.addEventListener("click", () => {
  newProject.classList.remove("active");
});

document.addEventListener("click", (event) => {
  if (
    !createProject.contains(event.target) &&
    !newProject.contains(event.target)
  ) {
    newProject.classList.remove("active");
  }
});

/*----------save new task at the localstorage------------*/
const createTask = document.querySelector(".form-add-project");

createTask.addEventListener("submit", (event) => {
  event.preventDefault();
  const project = {
    name: document.querySelector(".project-name").value,
    description: document.querySelector(".project-description").value,
    dateStart: document.querySelector(".start-date").value,
    dateEnd: document.querySelector(".end-date").value,
  };

  console.log(project);
});
