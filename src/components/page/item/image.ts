import { BaseComponent } from '../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(url: string, alt: string) {
    super(`<section class="image__box">
              <div class="imgae__holder">
               <img class="image__thumbnail" />
               <p class="image__title">
               </p>
               </div>
          </section>`);

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
}
