declare let tituloSugerencia: string;
declare let descripcionSugerencia: string;
declare let esAnonimo: boolean;
declare let votos: number;
declare let estadoSugerencia: "pendiente" | "en revisión" | "implementada";
interface Usuario {
    id: number;
    nombre: string;
    rol: "estudiante" | "autoridad";
    email?: string;
}
interface Comentario {
    id: number;
    autor: Usuario;
    mensaje: string;
    fecha: Date;
    anonimo?: boolean;
}
interface Sugerencia {
    id: number;
    titulo: string;
    descripcion: string;
    autor: Usuario;
    comentarios: Comentario[];
    votos: number;
    estado: "pendiente" | "en revisión" | "implementada";
    categoria: string | number;
}
interface Categoria {
    readonly id: number;
    nombre: string;
}
declare class UsuarioClass implements Usuario {
    id: number;
    nombre: string;
    rol: "estudiante" | "autoridad";
    email?: string | undefined;
    constructor(id: number, nombre: string, rol: "estudiante" | "autoridad", email?: string | undefined);
    esAutoridad(): boolean;
}
declare class ComentarioClass implements Comentario {
    id: number;
    autor: Usuario;
    mensaje: string;
    fecha: Date;
    anonimo?: boolean | undefined;
    constructor(id: number, autor: Usuario, mensaje: string, fecha: Date, anonimo?: boolean | undefined);
    esAnonimo(): boolean;
}
declare class SugerenciaClass implements Sugerencia {
    id: number;
    titulo: string;
    descripcion: string;
    autor: Usuario;
    comentarios: Comentario[];
    votos: number;
    estado: "pendiente" | "en revisión" | "implementada";
    categoria: string | number;
    constructor(id: number, titulo: string, descripcion: string, autor: Usuario, comentarios: Comentario[], votos: number, estado: "pendiente" | "en revisión" | "implementada", categoria: string | number);
    agregarComentario(comentario: Comentario): void;
}
declare const usuarios: Usuario[];
declare const comentarios: Comentario[];
declare const sugerencias: Sugerencia[];
declare function mostrarSugerencias(sugs: Sugerencia[]): void;
declare function contarSugerenciasPorEstado(sugs: Sugerencia[], estado: "pendiente" | "en revisión" | "implementada"): number;
declare function insertarYEliminarSugerencia(sugs: Sugerencia[], sugerencia: Sugerencia): void;
declare const titulosMayusculas: string[];
declare const nombresUsuarios: string[];
declare const sugerenciasPendientes: Sugerencia[];
declare const totalVotos: number;
declare const promedioVotos: number;
declare const sugerenciaEjemplo: SugerenciaClass;
declare const baseDatos: {
    usuarios: Usuario[];
    sugerencias: Sugerencia[];
    comentarios: Comentario[];
};
declare function resumenSugerencia(s: Sugerencia): string;
declare function contarComentariosUsuario(usuarioId: number, comentarios: Comentario[]): number;
declare const nuevaSugerencia: Sugerencia;
declare const usuarioTest: UsuarioClass;
declare const comentarioTest: ComentarioClass;
declare const sugerenciaTest: SugerenciaClass;
//# sourceMappingURL=index.d.ts.map