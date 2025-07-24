export interface Estudiantes {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
    telefono: string;
    fechanacimiento: string;
}

export type CreateEstudiante = Omit<Estudiantes, 'id'>;