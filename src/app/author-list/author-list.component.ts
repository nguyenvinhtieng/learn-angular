import { Component } from '@angular/core';
import { Author, authors } from '../author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent {
  authors = authors
  currentAuthor = authors[0]
  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor
  }
  onDelete(id: number) {
    this.authors = this.authors.filter(author => author.id !== id)
    this.currentAuthor = this.authors[0]
  }
}
