import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksComponent } from './books-component/books-component';
import { ToolbarComponent } from './toolbar-component/toolbar-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, BooksComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Verifica Pio - Biblioteca 2026');
}
