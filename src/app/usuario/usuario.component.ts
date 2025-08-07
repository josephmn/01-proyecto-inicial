import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input() avatar!: string;
  @Input() nombre!: string;

  get rutaImagen() {
    return 'assets/usuarios/' + this.avatar;
  }

  alSeleccionarUsuario() {
  }
}
