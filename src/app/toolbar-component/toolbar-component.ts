import { Component, inject } from '@angular/core';
import { BooksService } from '../shared/booksService';

@Component({
  selector: 'app-toolbar-component',
  imports: [],
  templateUrl: './toolbar-component.html',
  styleUrl: './toolbar-component.css',
})
export class ToolbarComponent {
  public booksService = inject(BooksService)

  citta: string = "Città"
  genere: string = "Generi"

  ngOnInit() {
    this.booksService.getCitta()
    this.booksService.getGenere()
  }

  filtra() {
    this.booksService.filtra(this.citta, this.genere)
  }
}