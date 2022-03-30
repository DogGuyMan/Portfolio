"use strict";

function GetCurSection(_offset : number) : number {
    let tempIndex = 0;
    let curScrollY = window.pageYOffset;
    for (let i = 0; i < sectionSetElements.length; i++) {
        const curSection = sectionSetElements[i];
        let curSectionHeight = curSection.getBoundingClientRect().bottom + curScrollY;
        if (curScrollY <=  curSectionHeight - _offset) {
            tempIndex = i;
            break;
        }
    }
    return tempIndex;
}
