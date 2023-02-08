import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { PageComponent } from './components/page/page.js';

class App {
  private page: PageComponent;
  private image: ImageComponent;
  private note: NoteComponent;
  private todo: TodoComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
    this.image = new ImageComponent('https://picsum.photos/200/300', 'sample');
    this.image.attachTo(appRoot);
    this.note = new NoteComponent('노트', '노트의 내용');
    this.note.attachTo(appRoot);
    this.todo = new TodoComponent('할 일 목록', 'art-here 회의');
    this.todo.attachTo(appRoot);
  }
}

new App(document.querySelector('.document') as HTMLElement);
