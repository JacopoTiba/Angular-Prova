import { Component, Input } from '@angular/core';
import { LibroModel } from '../models/libro.model';

@Component({
  selector: 'app-details-component',
  imports: [],
  templateUrl: './details-component.html',
  styleUrl: './details-component.css',
})
export class DetailsComponent {
  @Input() libro!: LibroModel;
}
