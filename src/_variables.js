"use strict";
///////////////////////////////////////////////////////////////////////////////
/*sidebarContentsActive.js*/
//const SIDEBAR_CONTENT_ACTIVE = "sidebarContnet_Active"
//let isSidebarActive = new Array(sidebarContentElements.length)
//isSidebarActive.fill(false);
///////////////////////////////////////////////////////////////////////////////
///*sidebar.js*/
//const sidebarElement = document.querySelector(".sidebar");
//const naviagtorElement = sidebarElement.querySelector(".fixed_navigation");
//const sidebarContent = naviagtorElement.querySelector(".sidebar_contents");
//const sidebarContentElements = sidebarContent.querySelectorAll("p");
///////////////////////////////////////////////////////////////////////////////
///*Imageslider.js*/
//const slideContent = document.querySelector(".gallery_list");
//const slidesSet = slideContent.querySelector(".slides");
//const TIME_INTERVAL = 1000;
//
//let firstSlide = slidesSet.firstElementChild;
//let lastSlide = slidesSet.lastElementChild;
//
//const slideElements = slidesSet.querySelectorAll(".slide"); 
//const slideWidth = slideElements[0].clientWidth;
//slideElements.forEach(_E=>{
//    slidesSet.append(_E.cloneNode(true));
//});
///////////////////////////////////////////////////////////////////////////////
///*positionbar.js*/
//const progressElement = naviagtorElement.querySelector(".menu_progress");
///////////////////////////////////////////////////////////////////////////////
///*getIndex.js*/
//const sectionY = document.querySelectorAll("section > section");
/*sidebar*/
const sidebarElement = document.querySelector(".sidebar");
const naviagtorElement = sidebarElement.querySelector(".fixed_navigation");
const sidebarContent = naviagtorElement.querySelector(".sidebar_contents");
const progressElement = naviagtorElement.querySelector(".menu_progress");
const sidebarContentElements = sidebarContent.querySelectorAll("p");
const SIDEBAR_CONTENT_ACTIVE = "sidebarContnet_Active";
let isSidebarActive = new Array(sidebarContentElements.length);
isSidebarActive.fill(false);
function GetSectionObeject() {
    let index = 0;
    let tempObject = new Map;
    let tempKey;
    sidebarContentElements.forEach(_E => {
        console.log(_E.outerText);
        tempKey = _E.outerText;
        tempObject.set(tempKey, index++);
    });
    return tempObject;
}
let sectionObject = GetSectionObeject();
/*getIndex.js*/
const sectionSet = document.querySelector("section.contents");
const sectionSetElements = sectionSet === null || sectionSet === void 0 ? void 0 : sectionSet.querySelectorAll("section");
/*gallery*/
const gallerySection = sectionSet.querySelector("section.gallery_section");
const slideContent = gallerySection.querySelector(".gallery_list");
const slidesSet = slideContent.querySelector(".slides");
const TIME_INTERVAL = 1000;
let firstSlide = slidesSet.firstElementChild;
let lastSlide = slidesSet.lastElementChild;
const slideElements = slidesSet.querySelectorAll(".slide");
const slideWidth = slideElements[0].clientWidth;
slideElements.forEach(_E => {
    slidesSet.append(_E.cloneNode(true));
});
slideElements.forEach(_E => {
    slidesSet.append(_E.cloneNode(true));
});
