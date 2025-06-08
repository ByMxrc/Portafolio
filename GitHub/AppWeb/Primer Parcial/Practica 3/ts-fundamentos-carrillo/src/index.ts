// 1. Tipos básicos

let tituloSugerencia: string = "Mejorar la conectividad WiFi";
let descripcionSugerencia: string = "El internet en la biblioteca es muy lento.";
let esAnonimo: boolean = false;
let votos: number = 15;
let estadoSugerencia: "pendiente" | "en revisión" | "implementada" = "pendiente";

// 2. Interfaces

interface Usuario {
  id: number;
  nombre: string;
  rol: "estudiante" | "autoridad";
  email?: string; // optional
}

interface Comentario {
  id: number;
  autor: Usuario;
  mensaje: string;
  fecha: Date;
  anonimo?: boolean; // optional
}

interface Sugerencia {
  id: number;
  titulo: string;
  descripcion: string;
  autor: Usuario;
  comentarios: Comentario[];
  votos: number;
  estado: "pendiente" | "en revisión" | "implementada";
  categoria: string | number; // union type
}

// 6. Uso de tipos especiales

interface Categoria {
  readonly id: number;
  nombre: string;
}

// 3. Clases

class UsuarioClass implements Usuario {
  constructor(
    public id: number,
    public nombre: string,
    public rol: "estudiante" | "autoridad",
    public email?: string
  ) {}

  esAutoridad(): boolean {
    return this.rol === "autoridad";
  }
}

class ComentarioClass implements Comentario {
  constructor(
    public id: number,
    public autor: Usuario,
    public mensaje: string,
    public fecha: Date,
    public anonimo?: boolean
  ) {}

  esAnonimo(): boolean {
    return !!this.anonimo;
  }
}

class SugerenciaClass implements Sugerencia {
  constructor(
    public id: number,
    public titulo: string,
    public descripcion: string,
    public autor: Usuario,
    public comentarios: Comentario[],
    public votos: number,
    public estado: "pendiente" | "en revisión" | "implementada",
    public categoria: string | number
  ) {}

  agregarComentario(comentario: Comentario): void {
    this.comentarios.push(comentario);
  }
}

// 4. Arreglos tipados

const usuarios: Usuario[] = [
  { id: 1, nombre: "Ana", rol: "estudiante", email: "ana@uni.edu" },
  { id: 2, nombre: "Juan", rol: "estudiante" },
  { id: 3, nombre: "Dra. Pérez", rol: "autoridad", email: "perez@uni.edu" },
  { id: 4, nombre: "Carlos", rol: "estudiante" },
  { id: 5, nombre: "Ing. Torres", rol: "autoridad" },
  { id: 6, nombre: "Sofía", rol: "estudiante", email: "sofia@uni.edu" },
  { id: 7, nombre: "Mónica", rol: "estudiante" },
  { id: 8, nombre: "Lic. Ruiz", rol: "autoridad", email: "ruiz@uni.edu" },
  { id: 9, nombre: "Pedro", rol: "estudiante" },
  { id: 10, nombre: "Elena", rol: "estudiante" }
];

const comentarios: Comentario[] = [
  { id: 1, autor: usuarios[0], mensaje: "¡Excelente idea!", fecha: new Date(), anonimo: false },
  { id: 2, autor: usuarios[2], mensaje: "Estamos trabajando en ello.", fecha: new Date(), anonimo: false },
  { id: 3, autor: usuarios[1], mensaje: "Sería bueno tener más enchufes.", fecha: new Date(), anonimo: true },
  { id: 4, autor: usuarios[3], mensaje: "Apoyo la sugerencia.", fecha: new Date(), anonimo: false },
  { id: 5, autor: usuarios[4], mensaje: "Lo revisaremos en la próxima reunión.", fecha: new Date(), anonimo: false },
  { id: 6, autor: usuarios[5], mensaje: "El internet es lento en todo el campus.", fecha: new Date(), anonimo: true },
  { id: 7, autor: usuarios[6], mensaje: "¿Podrían mejorar la cafetería también?", fecha: new Date(), anonimo: false },
  { id: 8, autor: usuarios[7], mensaje: "Gracias por sus comentarios.", fecha: new Date(), anonimo: false },
  { id: 9, autor: usuarios[8], mensaje: "Faltan áreas de estudio.", fecha: new Date(), anonimo: true },
  { id: 10, autor: usuarios[9], mensaje: "Me gustaría más actividades deportivas.", fecha: new Date(), anonimo: false }
];

const sugerencias: Sugerencia[] = [
  {
    id: 1,
    titulo: "Mejorar la conectividad WiFi",
    descripcion: "El internet en la biblioteca es muy lento.",
    autor: usuarios[0],
    comentarios: [comentarios[0], comentarios[1], comentarios[2]],
    votos: 15,
    estado: "pendiente",
    categoria: "Tecnología"
  },
  {
    id: 2,
    titulo: "Más áreas verdes",
    descripcion: "Faltan espacios para descansar al aire libre.",
    autor: usuarios[1],
    comentarios: [comentarios[3], comentarios[4]],
    votos: 10,
    estado: "en revisión",
    categoria: "Infraestructura"
  },
  {
    id: 3,
    titulo: "Mejorar la cafetería",
    descripcion: "La comida no es variada y los precios son altos.",
    autor: usuarios[5],
    comentarios: [comentarios[5], comentarios[6]],
    votos: 8,
    estado: "pendiente",
    categoria: "Servicios"
  },
  {
    id: 4,
    titulo: "Más actividades deportivas",
    descripcion: "Faltan torneos y clubes deportivos.",
    autor: usuarios[9],
    comentarios: [comentarios[9]],
    votos: 12,
    estado: "implementada",
    categoria: 101 // Ejemplo de union type (number)
  },
  {
    id: 5,
    titulo: "Áreas de estudio nocturnas",
    descripcion: "La biblioteca cierra muy temprano.",
    autor: usuarios[8],
    comentarios: [comentarios[8]],
    votos: 7,
    estado: "pendiente",
    categoria: "Académico"
  },
  {
    id: 6,
    titulo: "Mejorar la seguridad",
    descripcion: "Faltan cámaras en los pasillos.",
    autor: usuarios[3],
    comentarios: [],
    votos: 9,
    estado: "en revisión",
    categoria: "Seguridad"
  },
  {
    id: 7,
    titulo: "Más enchufes en aulas",
    descripcion: "No hay suficientes tomas para cargar laptops.",
    autor: usuarios[6],
    comentarios: [],
    votos: 5,
    estado: "pendiente",
    categoria: "Infraestructura"
  },
  {
    id: 8,
    titulo: "Transporte universitario",
    descripcion: "Sería útil tener buses para los estudiantes.",
    autor: usuarios[4],
    comentarios: [],
    votos: 11,
    estado: "en revisión",
    categoria: "Servicios"
  },
  {
    id: 9,
    titulo: "Becas para deportistas",
    descripcion: "Apoyar a quienes representan a la universidad.",
    autor: usuarios[7],
    comentarios: [comentarios[7]],
    votos: 6,
    estado: "pendiente",
    categoria: "Académico"
  },
  {
    id: 10,
    titulo: "Mejorar la señalización",
    descripcion: "Es difícil encontrar las aulas nuevas.",
    autor: usuarios[8],
    comentarios: [],
    votos: 4,
    estado: "pendiente",
    categoria: "Infraestructura"
  }
];

// 5. Funciones tipadas

function mostrarSugerencias(sugs: Sugerencia[]): void {
  console.log("\n=== SUGERENCIAS ===");
  sugs.forEach(s => {
    console.log(`ID: ${s.id}, Título: ${s.titulo}, Estado: ${s.estado}, Votos: ${s.votos}`);
  });
}

function contarSugerenciasPorEstado(sugs: Sugerencia[], estado: "pendiente" | "en revisión" | "implementada"): number {
  return sugs.filter(s => s.estado === estado).length;
}

function insertarYEliminarSugerencia(sugs: Sugerencia[], sugerencia: Sugerencia): void {
  console.log("\n=== INSERTAR Y ELIMINAR SUGERENCIA ===");
  sugs.push(sugerencia);
  console.log(`Sugerencias después de insertar: ${sugs.length}`);
  sugs.pop();
  console.log(`Sugerencias después de eliminar: ${sugs.length}`);
}

// 7. Uso de map()

const titulosMayusculas = sugerencias.map(s => s.titulo.toUpperCase());
console.log("\nTítulos de sugerencias en mayúsculas:", titulosMayusculas);

const nombresUsuarios = usuarios.map(u => u.nombre);
console.log("Nombres de usuarios:", nombresUsuarios);

// 8. Uso de filter()

const sugerenciasPendientes = sugerencias.filter(s => s.estado === "pendiente");
console.log("\nSugerencias pendientes:", sugerenciasPendientes.map(s => s.titulo));

// 9. Uso de reduce()

const totalVotos = sugerencias.reduce((sum, s) => sum + s.votos, 0);
console.log("\nTotal de votos en todas las sugerencias:", totalVotos);

const promedioVotos = totalVotos / sugerencias.length;
console.log("Promedio de votos por sugerencia:", promedioVotos.toFixed(2));

// 10. Relaciones entre entidades

const sugerenciaEjemplo = new SugerenciaClass(
  11,
  "Implementar reciclaje",
  "Colocar más tachos de reciclaje en el campus.",
  usuarios[0],
  [],
  0,
  "pendiente",
  "Medio Ambiente"
);

const baseDatos = {
  usuarios,
  sugerencias,
  comentarios
};

// 11. Operación de negocio

function resumenSugerencia(s: Sugerencia): string {
  return `Sugerencia: ${s.titulo}\nAutor: ${s.autor.nombre}\nVotos: ${s.votos}\nEstado: ${s.estado}\nComentarios: ${s.comentarios.length}`;
}

function contarComentariosUsuario(usuarioId: number, comentarios: Comentario[]): number {
  return comentarios.filter(c => c.autor.id === usuarioId).length;
}

console.log("\nResumen de sugerencia ejemplo:\n", resumenSugerencia(sugerenciaEjemplo));
console.log(`Comentarios hechos por ${usuarios[0].nombre}:`, contarComentariosUsuario(1, comentarios));

// 12. Imprimir estructuras anidadas

console.log("\n=== SUGERENCIAS CON COMENTARIOS ===");
sugerencias.forEach(s => {
  console.log(`\nSugerencia: ${s.titulo} (Estado: ${s.estado})`);
  console.log(`  Autor: ${s.autor.nombre}`);
  console.log(`  Votos: ${s.votos}`);
  if (s.comentarios.length > 0) {
    console.log("  Comentarios:");
    s.comentarios.forEach(c => {
      console.log(`    - ${c.mensaje} (${c.autor.nombre}${c.anonimo ? ", anónimo" : ""})`);
    });
  } else {
    console.log("  Sin comentarios.");
  }
});

// Ejecutar funciones

mostrarSugerencias(sugerencias);

console.log(`\nSugerencias en revisión: ${contarSugerenciasPorEstado(sugerencias, "en revisión")}`);

const nuevaSugerencia: Sugerencia = {
  id: 12,
  titulo: "Más becas de investigación",
  descripcion: "Apoyar a estudiantes que hacen investigación.",
  autor: usuarios[1],
  comentarios: [],
  votos: 0,
  estado: "pendiente",
  categoria: "Académico"
};

insertarYEliminarSugerencia(sugerencias, nuevaSugerencia);

// Validaciones de clases

console.log("\n=== VALIDACIONES ===");
const usuarioTest = new UsuarioClass(20, "Test", "estudiante", "test@uni.edu");
console.log(`¿Es autoridad?: ${usuarioTest.esAutoridad()}`);

const comentarioTest = new ComentarioClass(20, usuarioTest, "Prueba", new Date(), true);
console.log(`¿Es anónimo?: ${comentarioTest.esAnonimo()}`);

const sugerenciaTest = new SugerenciaClass(20, "Prueba", "Prueba", usuarioTest, [], 0, "pendiente", "Test");
sugerenciaTest.agregarComentario(comentarioTest);
console.log(`Comentarios en sugerenciaTest: ${sugerenciaTest.comentarios.length}`);