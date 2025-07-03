export interface Materia {
    id: number;
    nombre: string;
    descripcion: string;
}

export type CreateMateria = Omit<Materia, 'id' | 'estudianteids' | 'estudiantesNombres' | 'estudiantesApellidos'>;