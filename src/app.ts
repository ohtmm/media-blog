import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';

class App {
  private page: PageComponent;
  private image: ImageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent('this is first page');
    this.page.attachTo(appRoot);
    this.image = new ImageComponent('./../assets/hands.jpg', 'hands');
    this.image.attactTo(appRoot);
  }
}

new App(document.querySelector('.document') as HTMLElement);
