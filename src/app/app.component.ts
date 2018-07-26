import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = [
    {
      id: 1,
      title: 'Angular in action',
      authors: 'Jan Kowalski',
      category: '#00ff00',
      bestseller: true
    },
    {
      id: 2,
      title: 'React in action',
      authors: 'Marek Nowak',
      category: '#00ff00',
      bestseller: false
    }
  ];
  titleSize = 24;

  get authorsStyle() {
    return {
      color: 'gray',
      letterSpacing: '2px'
    };
  }

  selectedBook = null;
  editedBook = null;

  select(book) {
    this.selectedBook = book;
    this.editedBook = Object.assign({}, book);
  }

  save() {
    Object.assign(this.selectedBook, this.editedBook);
    this.reset();
  }

  reset() {
    this.selectedBook = null;
    this.editedBook = null;
  }
}
