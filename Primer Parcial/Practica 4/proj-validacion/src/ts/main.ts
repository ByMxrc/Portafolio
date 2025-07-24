import "../style.css";

// --- Estudiantes ---
const listaEstudiantes = document.getElementById('lista-estudiantes') as HTMLDivElement;
const estudiantes: any[] = [];


document.getElementById('form-estudiante')?.addEventListener('submit', function (e) {
  e.preventDefault();
  document.querySelectorAll('.error-msg').forEach(el => el.remove());

  const nombre = (document.getElementById('nombre-estudiante') as HTMLInputElement).value.trim();
  const apellido = (document.getElementById('apellido-estudiante') as HTMLInputElement).value.trim();
  const edad = (document.getElementById('edad-estudiante') as HTMLInputElement).value.trim();
  const telefono = (document.getElementById('telefono-estudiante') as HTMLInputElement).value.trim();
  const correo = (document.getElementById('correo-estudiante') as HTMLInputElement).value.trim();

  let valido = true;

  if (!nombre) {
    mostrarError(document.getElementById('nombre-estudiante') as HTMLInputElement, 'El nombre es obligatorio.');
    valido = false;
  }
  if (!apellido) {
    mostrarError(document.getElementById('apellido-estudiante') as HTMLInputElement, 'El apellido es obligatorio.');
    valido = false;
  }
  if (!edad) {
    mostrarError(document.getElementById('edad-estudiante') as HTMLInputElement, 'La edad es obligatoria.');
    valido = false;
  }
  if (!telefono) {
    mostrarError(document.getElementById('telefono-estudiante') as HTMLInputElement, 'El teléfono es obligatorio.');
    valido = false;
  }
  if (!correo) {
    mostrarError(document.getElementById('correo-estudiante') as HTMLInputElement, 'El correo es obligatorio.');
    valido = false;
  }
  if (correo && !correo.includes('@')) {
    mostrarError(document.getElementById('correo-estudiante') as HTMLInputElement, 'El correo debe contener un @');
    valido = false;
  }
  if (nombre && apellido && nombre.toLowerCase() === apellido.toLowerCase()) {
    mostrarError(document.getElementById('apellido-estudiante') as HTMLInputElement, 'El nombre y el apellido no pueden ser iguales.');
    valido = false;
  }
  if (edad && !/^\d{2}$/.test(edad)) {
    mostrarError(document.getElementById('edad-estudiante') as HTMLInputElement, 'La edad debe ser un número de 2 dígitos.');
    valido = false;
  }
  if (telefono && !/^\d{10}$/.test(telefono)) {
    mostrarError(document.getElementById('telefono-estudiante') as HTMLInputElement, 'El teléfono debe tener exactamente 10 dígitos.');
    valido = false;
  }
  if (!valido) return;

  estudiantes.push({ nombre, apellido, edad, telefono, correo });
  renderEstudiantes();
  (e.target as HTMLFormElement).reset();
});

function renderEstudiantes() {
  listaEstudiantes.innerHTML = estudiantes.map((est, idx) =>
    `<div class="item-lista">
      <strong>${est.nombre} ${est.apellido}</strong><br>
      Edad: ${est.edad} <br>
      Tel: ${est.telefono} <br>
      Correo: ${est.correo}
      <button class="eliminar-estudiante" data-idx="${idx}">Eliminar</button>
    </div>`
  ).join('');

  // Asignar eventos a los botones de eliminar
  listaEstudiantes.querySelectorAll('.eliminar-estudiante').forEach(btn => {
    btn.addEventListener('click',  (event) => {
      const idx = parseInt((event.currentTarget as HTMLButtonElement).dataset.idx!);
      estudiantes.splice(idx, 1);
      renderEstudiantes();
    });
  });
}


// --- Aulas ---
const listaAulas = document.getElementById('lista-aulas') as HTMLDivElement;
const aulas: any[] = [];

document.getElementById('form-aula')?.addEventListener('submit', function (e) {
  e.preventDefault();
  document.querySelectorAll('.error-msg').forEach(el => el.remove());

  const nombre = (document.getElementById('nombre-aula') as HTMLInputElement).value.trim();
  const capacidad = (document.getElementById('capacidad-aula') as HTMLInputElement).value.trim();

  let valido = true;
  if (!nombre) {
    mostrarError(document.getElementById('nombre-aula') as HTMLInputElement, 'El nombre del aula es obligatorio.');
    valido = false;
  }
  if (!capacidad) {
    mostrarError(document.getElementById('capacidad-aula') as HTMLInputElement, 'La capacidad es obligatoria.');
    valido = false;
  }
  if (capacidad && !/^\d+$/.test(capacidad)) {
    mostrarError(document.getElementById('capacidad-aula') as HTMLInputElement, 'La capacidad debe ser un número.');
    valido = false;
  }
  if (!valido) return;

  aulas.push({ nombre, capacidad });
  renderAulas();
  (e.target as HTMLFormElement).reset();
});

function renderAulas() {
  listaAulas.innerHTML = aulas.map((aula, idx) =>
    `<div class="item-lista">
      <strong>${aula.nombre}</strong><br>
      Capacidad: ${aula.capacidad}
      <button class="eliminar-aula" data-idx="${idx}">Eliminar</button>
    </div>`
  ).join('');

  listaAulas.querySelectorAll('.eliminar-aula').forEach(btn => {
    btn.addEventListener('click',  (event) => {
      const idx = parseInt((event.currentTarget as HTMLButtonElement).dataset.idx!);
      aulas.splice(idx, 1);
      renderAulas();
    });
  });
}

// --- Profesores ---
const listaProfesores = document.getElementById('lista-profesores') as HTMLDivElement;
const profesores: any[] = [];

document.getElementById('form-profesor')?.addEventListener('submit', function (e) {
  e.preventDefault();
  document.querySelectorAll('.error-msg').forEach(el => el.remove());

  const nombre = (document.getElementById('nombre-profesor') as HTMLInputElement).value.trim();
  const apellido = (document.getElementById('apellido-profesor') as HTMLInputElement).value.trim();
  const especialidad = (document.getElementById('especialidad-profesor') as HTMLInputElement).value.trim();

  let valido = true;
  if (!nombre) {
    mostrarError(document.getElementById('nombre-profesor') as HTMLInputElement, 'El nombre es obligatorio.');
    valido = false;
  }
  if (!apellido) {
    mostrarError(document.getElementById('apellido-profesor') as HTMLInputElement, 'El apellido es obligatorio.');
    valido = false;
  }
  if (!especialidad) {
    mostrarError(document.getElementById('especialidad-profesor') as HTMLInputElement, 'La especialidad es obligatoria.');
    valido = false;
  }
  if (!valido) return;

  profesores.push({ nombre, apellido, especialidad });
  renderProfesores();
  (e.target as HTMLFormElement).reset();
});

function renderProfesores() {
  listaProfesores.innerHTML = profesores.map((prof, idx) =>
    `<div class="item-lista">
      <strong>${prof.nombre} ${prof.apellido}</strong><br>
      Especialidad: ${prof.especialidad}
      <button class="eliminar-profesor" data-idx="${idx}">Eliminar</button>
    </div>`
  ).join('');

  listaProfesores.querySelectorAll('.eliminar-profesor').forEach(btn => {
    btn.addEventListener('click',  (event) => {
      const idx = parseInt((event.currentTarget as HTMLButtonElement).dataset.idx!);
      profesores.splice(idx, 1);
      renderProfesores();
    });
  });
}

// --- Utilidad para mostrar errores ---
function mostrarError(input: HTMLInputElement, mensaje: string) {
  const error = document.createElement('div');
  error.className = 'error-msg text-red-600 text-sm mt-1';
  error.textContent = mensaje;
  input.parentElement?.appendChild(error);
}

// Botón para eliminar estudiantes
document.getElementById('borrar-estudiantes')?.addEventListener('click', () => {
  estudiantes.length = 0;
  renderEstudiantes();
});

// Botón para eliminar aulas
document.getElementById('borrar-aulas')?.addEventListener('click', () => {
  aulas.length = 0;
  renderAulas();
});

// Botón para eliminar profesores
document.getElementById('borrar-profesores')?.addEventListener('click', () => {
  profesores.length = 0;
  renderProfesores();
});

// Botón para eliminar todos los datos
document.getElementById('borrar-todo')?.addEventListener('click', () => {
  estudiantes.length = 0;
  aulas.length = 0;
  profesores.length = 0;
  renderEstudiantes();
  renderAulas();
  renderProfesores();
});