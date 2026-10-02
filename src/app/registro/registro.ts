import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component ({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class RegistroComponent {
  usuario = {
    nombre: '',
    email: '',
    telefono: '',
    edad: null,
    password: '',
    confirmarPassword: ''
  };

  datosRegistrados: any = null;

  onSubmit() {
    this.datosRegistrados = { ...this.usuario};
  }
}