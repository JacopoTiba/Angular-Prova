import { inject, Injectable } from '@angular/core';
import { DataStorageService } from './data-storage-service';
import { LibroModel } from '../models/libro.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService  {
  private dataStorage = inject(DataStorageService);

  libro: LibroModel[] = []
  citta: string[] = []
  genere: string[] = []

  getBook() {
    this.dataStorage.inviaRichiesta("GET", "/libri")?.subscribe({
      next: (libriArray: any) => {
        this.libro = libriArray;
        console.log(this.libro);
      },
      error: (err: any) => {
        console.log(err);
        alert(err.message);
      }
    })
  }

  getCitta() {
    this.dataStorage.inviaRichiesta("GET", "/libri")?.subscribe({
      next: (libriArray: any) => {
        for (const libro of libriArray) {
          if (!this.citta.includes(libro.sede.citta)) {
            this.citta.push(libro.sede.citta)
          }
        }
      },
      error: (err: any) => {
        console.log(err);
        alert(err.message);
      }
    })
  }

  getGenere() {
    this.dataStorage.inviaRichiesta("GET", "/libri")?.subscribe({
      next: (LibroArray: any) => {
        for (const libro of LibroArray) {
          if (!this.genere.includes(libro.genere)) {
            this.genere.push(libro.genere)
          }
        }
      },
      error: (err: any) => {
        console.log(err);
        alert(err.message);
      }
    })
  }

  filtra(citta: string, genere: string) {
    const params = {} as any;

    if (citta !== "all" && citta !== "Città") {
      params['sede.citta'] = citta;
    }
    if (genere !== "all" && genere !== "Generi") {
      params.genere = genere;
    }
    console.log(citta)
    console.log(genere)
    console.log(params)

    this.dataStorage.inviaRichiesta("GET", "/libri", params)?.subscribe({
      next: (libriArray: any) => {
        this.libro = libriArray;
        console.log(this.libro);
      },
      error: (err: any) => {
        console.log(err);
        alert(err.message);
      }
    });
  }

  presta(libro: any) {
    console.log(libro)
    libro.copiePrestate = libro.copiePrestate + 1
    return this.dataStorage.inviaRichiesta("PATCH", "/libri/" + libro.id, libro)
  }
}

