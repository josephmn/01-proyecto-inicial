import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [],
  templateUrl: './nueva-tarea.component.html',
  styleUrl: './nueva-tarea.component.css'
})
export class NuevaTareaComponent {
  @Output() cacelar = new EventEmitter<void>();
  
  alCancelar() {
    this.cacelar.emit();
  }
}
