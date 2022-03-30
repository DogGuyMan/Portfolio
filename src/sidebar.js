"use strict";
//console.log(sectionObject);
/*
const sectionObject = {
    "title" : 0,
    "about" : 1,
    "tech" : 2,
    "project" : 3,
    "gallery" : 4,
    "contact me" : 5
};
*/
function refrashSidebar() {
    let curSectionIndex = handleCurSection();
    console.log(curSectionIndex);
    sidebarContentActive(curSectionIndex);
}
