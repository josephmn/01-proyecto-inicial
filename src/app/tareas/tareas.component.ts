import { Component, Input } from '@angular/core';
import { TareaComponent } from "./tarea/tarea.component";

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [TareaComponent],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  @Input() nombre?: string;
}
