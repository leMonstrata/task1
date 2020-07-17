'use strict';
const tab = document.querySelectorAll('.tab');

function toggleClass(element, elementClass) {
    if (element.classList.contains(elementClass)) {
        element.classList.remove(elementClass);
    } else {
        element.classList.add(elementClass);
    }
}

Array.from(tab).forEach(element => {
    const tabHeader = element.querySelector('.tab__header');
            tabHeader.addEventListener('click', () => { 
                toggleClass(element, 'tab--active');
            });
});