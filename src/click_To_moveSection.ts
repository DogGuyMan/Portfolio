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

//https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView
//https://okayoon.tistory.com/entry/%ED%81%B4%EB%A6%AD%ED%95%98%EC%97%AC-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0-scrollintoview
function handleClickSidebarContents(_E : any){
    _E.preventDefault();
    if(_E.target instanceof HTMLElement){
        let targetElement : HTMLElement = _E.target;
        let curSectionIdx = sectionObject.get(targetElement.innerText);
        sectionSetElements[curSectionIdx].scrollIntoView({behavior: "smooth"});
    }
}
sidebarContent.addEventListener("click", handleClickSidebarContents);