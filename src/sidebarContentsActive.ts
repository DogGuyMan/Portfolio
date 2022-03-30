function sidebarContentActive(curIdx : number){
    if(isSidebarActive[curIdx] === false){
        isSidebarActive.fill(false);
        isSidebarActive[curIdx] = true;
        sidebarContentElements.forEach(_E => {
            _E.classList.remove(SIDEBAR_CONTENT_ACTIVE);
        })
        sidebarContentElements[curIdx].classList.add(SIDEBAR_CONTENT_ACTIVE);
    }
}