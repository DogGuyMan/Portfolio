"use strict";
function sidebarContentActive(curIdx) {
    if (isSidebarActive[curIdx] === false) {
        isSidebarActive.fill(false);
        isSidebarActive[curIdx] = true;
        sidebarContentElements.forEach(_E => {
            _E.classList.remove(SIDEBAR_CONTENT_ACTIVE);
        });
        sidebarContentElements[curIdx].classList.add(SIDEBAR_CONTENT_ACTIVE);
    }
}
