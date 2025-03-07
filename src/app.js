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
const projectsSection = document.querySelector(".colums-content");
const notifications = document.querySelector(".notifications-section");
const projects = JSON.parse(localStorage.getItem("projects") || "[]");
let hideTimeoutNotifications;

createTask.addEventListener("submit", (event) => {
  clearTimeout(hideTimeoutNotifications);

  event.preventDefault();

  const project = {
    name: document.querySelector("#project-name").value,
    description: document.querySelector("#project-description").value,
    dateStart: document.querySelector("#start-date").value,
    dateEnd: document.querySelector("#end-date").value,
  };
  projects.push(project);
  localStorage.setItem("projects", JSON.stringify(projects));
  ShowProjects();
  ShowNotifications();
  newProject.classList.remove("active");
});

function ShowProjects() {
  projectsSection.innerHTML = "";
  projects.forEach((project, index) => {
    const projectElement = document.createElement("div");
    projectElement.className = "project-section";
    projectElement.innerHTML = `
      <div class="header-project-section">
        <h3>${project.name}</h3>
        <i class="fa-solid fa-pencil"></i>
      </div>
      <div class="description-project-section">      
        <p>${project.description}</p>       
      </div>

      <div class="dates-project-section">
        <small>Inicio: ${project.dateStart} - Fin: ${project.dateEnd}</small>
        <i class="fa-solid fa-trash"></i>
      <div>

    `;

    projectsSection.appendChild(projectElement);
  });
}

function ShowNotifications() {
  notifications.classList.add("active");

  hideTimeoutNotifications = setTimeout(() => {
    notifications.classList.remove("active");
  }, 5000);
}

const closeNotification = document.querySelector(".notifications-close_button");
closeNotification.addEventListener("click", () => {
  notifications.classList.remove("active");
});
ShowProjects();
