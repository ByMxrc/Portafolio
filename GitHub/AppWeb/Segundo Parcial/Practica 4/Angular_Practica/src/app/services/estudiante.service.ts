import { Injectable } from '@angular/core';
import { Estudiante } from '../models/estudiante.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private estudiantes: Estudiante[] = [];
  private idCounter = 1;

  getEstudiantes(): Estudiante[] {
    return [...this.estudiantes];
  }

  agregarEstudiante(est: Omit<Estudiante, 'id'>): void {
    const nuevo: Estudiante = { ...est, id: this.idCounter++ };
    this.estudiantes.push(nuevo);
  }

  actualizarEstudiante(est: Estudiante): void {
    const idx = this.estudiantes.findIndex(e => e.id === est.id);
    if (idx > -1) this.estudiantes[idx] = { ...est };
  }

  eliminarEstudiante(id: number): void {
    this.estudiantes = this.estudiantes.filter(e => e.id !== id);
  }
}