const navItem = document.querySelectorAll(".nav-item");

navItem.forEach((item) => item.addEventListener("mouseenter", rotateArrow));
navItem.forEach((item) => item.addEventListener("mouseleave", rotateArrow));

function rotateArrow(e) {
  if (e.target.classList.contains("nav-item")) {
    const index = e.target.dataset.index;
    const arrow = document.querySelector(`i.${index}`);
    arrow.classList.toggle("rotate");
    const menu = document.querySelector(`div.menu.${index}`);
    menu.classList.toggle("show-hide");
  }
}
