"use strict";
console.log("hello webpack");
refrashSidebar();
window.addEventListener("scroll", () => {
    refrashSidebar();
    progressBar(progPer(window.pageYOffset));
});
//const gridContent = document.querySelector(".project_grid");
//gridContent.style.height = `${document.querySelector(".project_box").clientWidth * 2}px`;
