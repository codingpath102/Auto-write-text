const sections = document.querySelectorAll('section');
const changer = document.querySelector('.changer');
const colors = [
    'rgb(6, 199, 135)',
    'rgb(138, 43, 226)',
    'rgb(255, 127, 80)',
    'rgb(255, 0, 140)'
];

const options = {
    threshold: 0.7
};


let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const colorsIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };

    if (entry.isIntersecting) {
        changer.style.setProperty('left', `${directions.left}px`);
        changer.style.setProperty('top', `${directions.top}px`);
        changer.style.setProperty('width', `${directions.width}px`);
        changer.style.setProperty('height', `${directions.height}px`);
        changer.style.background = colors[colorsIndex];
    }
    });
}

sections.forEach(section => {
    observer.observe(section);
});