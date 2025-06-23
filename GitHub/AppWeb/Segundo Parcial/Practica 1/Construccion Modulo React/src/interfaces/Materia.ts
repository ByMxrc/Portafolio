export interface Materia {
    id: number;
    nombre: string;
    descripcion: string;
    docenteId: number;
    docenteNombre: string;
    docenteApellido: string;
    estudianteids: number[];
    estudiantesNombres: string[];
    estudiantesApellidos: string[];
}