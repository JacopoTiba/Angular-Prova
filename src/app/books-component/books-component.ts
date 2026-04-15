import { Component, inject } from '@angular/core';
import { BooksService } from '../shared/booksService';
import { DetailsComponent } from "../details-component/details-component";

@Component({
  selector: 'app-books-component',
  imports: [DetailsComponent],
  templateUrl: './books-component.html',
  styleUrl: './books-component.css',
})
export class BooksComponent {
  public BooksService = inject(BooksService)

  ngOnInit() {
    this.BooksService.getBook()
  }

  selectedLibro: any;

  mostraDettagli(libro: any) {
    this.selectedLibro = libro;
  }

  presta(libro: any) {
    this.BooksService.presta(libro)?.subscribe({
    next: () => {
      alert("Prenotazione effettuata");
      this.BooksService.getBook();
    },
    error: (err) => {
      alert("Errore nella prenotazione");
      console.log(err);
    }
  });
  }
}
