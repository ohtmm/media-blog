"use strict";
class ImageComponent {
    constructor() {
        this.imageElement = document.createElement('img');
        this.imageElement.setAttribute('class', 'img');
        this.imageElement.setAttribute('src', './assets/hand.jpg');
    }
    attachTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.imageElement);
    }
}
