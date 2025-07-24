import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante.interface';
import { EstudianteService } from '../../services/estudiante.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  imports: [CommonModule, FormsModule]
})
export class EstudianteComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  estudianteSeleccionado: Estudiante | null = null;
  nuevoEstudiante: Omit<Estudiante, 'id'> = { nombre: '', apellido: '', edad: 0, correo: '', telefono: 0 };

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit() {
    this.cargarEstudiantes();
  }

  cargarEstudiantes() {
    this.estudiantes = this.estudianteService.getEstudiantes();
  }

  agregarEstudiante() {
    this.estudianteService.agregarEstudiante(this.nuevoEstudiante);
    this.nuevoEstudiante = { nombre: '', apellido: '', edad: 0, correo: '', telefono: 0 };
    this.cargarEstudiantes();
  }

  seleccionarEstudiante(est: Estudiante) {
    this.estudianteSeleccionado = { ...est };
  }

  actualizarEstudiante() {
    if (this.estudianteSeleccionado) {
      this.estudianteService.actualizarEstudiante(this.estudianteSeleccionado);
      this.estudianteSeleccionado = null;
      this.cargarEstudiantes();
    }
  }

  eliminarEstudiante(id: number) {
    this.estudianteService.eliminarEstudiante(id);
    if (this.estudianteSeleccionado?.id === id) this.estudianteSeleccionado = null;
    this.cargarEstudiantes();
  }
}