import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Usuario {
  id: string;
  nombre: string;
  avatar: string;
}

// type Usuario = {
//   id: string;
//   nombre: string;
//   avatar: string;
// };

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input({ required: true }) usuario!: Usuario;
  @Output() seleccion = new EventEmitter<string>();

  get rutaImagen() {
    return 'assets/usuarios/' + this.usuario.avatar;
  }

  alSeleccionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }
}
