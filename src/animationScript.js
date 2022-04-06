const anime = require("animejs");

let svgTextAnimation = anime({
    targets:'.svgText path',
    strokeDashoffset: {
        value : [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 3000,
        delay: function (el, i) {
            return i * 500
        },
    },
    opacity: {
        value: [0, 1],
        easing: 'easeInOutSine',
    },
    direction: 'alternate',
    loop: true
});

let ellipseListAnimation = anime({
    targets: '.EllipseList svg',
    translateY: {
        value: -30,
        easing: 'cubicBezier(.19,.14,0,1.1)',
        duration: 6000,
    },
    opacity: {
        value: [0, 1],
        duration: 6000,
        easing: 'easeInOutSine',
    },
    delay: anime.stagger(100), // increase delay by 100ms for each elements.
    direction: 'alternate',
    loop: true
});
