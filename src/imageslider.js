"use strict";
slidesSet.style.transform = `translateX(${-slideWidth * slideElements.length}px)`;
function Sliding(_ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            slidesSet.style.transform = `translateX(${-slideWidth * (1 + slideElements.length)}px)`;
            slidesSet.style.transition = `transform ${_ms}ms ease`;
            resolve();
        }, _ms);
    });
}
function ImageSliding(_ms) {
    firstSlide = slidesSet.firstElementChild;
    Sliding(_ms)
        .then(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                slidesSet.style.transition = "none";
                resolve();
            }, _ms);
        });
    })
        .then(() => {
        slidesSet.append(firstSlide.cloneNode(true));
        slidesSet.removeChild(firstSlide);
        slidesSet.style.transform = `translateX(${-slideWidth * slideElements.length}px)`;
    });
}
ImageSliding(TIME_INTERVAL);
setInterval(() => {
    ImageSliding(TIME_INTERVAL);
}, TIME_INTERVAL * 2);
/*
const startSlide = () => {
    setInterval(() => {
        Movecount += slideWidth;
        slide.style.transform = `translateX(${-Movecount}px)`;
        slide.style.transition = "transform 1s ease";
                slide.removeChild(slides[curcuit(aindex++, slides.length)]);
        aindex = aindex % slides.length;
        slide.append(slides[curcuit(preindex++, slides.length)].cloneNode(true));
        preindex = preindex % slides.length;
    }, 1000);
}



startSlide();
*/ 
