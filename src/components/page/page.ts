export class PageComponent {
  private element: HTMLUListElement;
  constructor(text: string) {
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = text;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
