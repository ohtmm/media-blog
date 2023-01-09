export class ImageComponent {
  private element: HTMLElement;
  constructor(url: string, alt: string) {
    const template = document.createElement('template');
    template.innerHTML = `<section class="image__box">
    <div class="imgae__holder">
      <img class="image__thumbnail" />
      <p class="image__title">
      </p>
    </div>
  </section>`;
    this.element = template.content.firstElementChild! as HTMLElement;

    const imageElement = this.element.querySelector(
      '.image__thumbnail'
    ) as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = alt;

    const titleElement = this.element.querySelector(
      '.image__title'
    )! as HTMLParagraphElement;
    titleElement.textContent = alt;
  }

  attactTo(parent: HTMLElement, position: InsertPosition = 'beforeend') {
    parent.insertAdjacentElement(position, this.element);
  }
}
