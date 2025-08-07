import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) nombre!: string;

  get rutaImagen() {
    return 'assets/usuarios/' + this.avatar;
  }

  alSeleccionarUsuario() {
  }
}
