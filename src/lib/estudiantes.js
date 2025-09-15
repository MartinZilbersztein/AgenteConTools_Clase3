// Gestión de estudiantes
import { readFileSync, writeFileSync } from 'fs';

const DATA_FILE = './data/alumnos.json';

class Estudiantes {
  constructor() {
    this.estudiantes = [];
  }
  
  cargarEstudiantesDesdeJson() {
    try {
        const data = JSON.parse(readFileSync(DATA_FILE, 'utf-8'));
        this.estudiantes = data.alumnos || [];
    } catch (e) {
        console.error("Error al leer el archivo de datos:", e);
    }
  }

  guardarEstudiantes() {
    try {
      writeFileSync(DATA_FILE, JSON.stringify({ alumnos: this.estudiantes }, null, 2));
      this.cargarEstudiantesDesdeJson();
    } catch (e) {
      console.error("Error al guardar los estudiantes:", e);
      throw new Error("No se pudo guardar la lista de estudiantes.");
    }
  }

  // TODO: Implementar método para agregar estudiante
  agregarEstudiante(nombre, apellido, curso) {
    // Tu código aquí
    this.estudiantes.push({nombre: nombre, apellido: apellido, curso: curso});
    this.guardarEstudiantes();
    return this.estudiantes;
  }

  // TODO: Implementar método para buscar estudiante por nombre
  buscarEstudiantePorNombre(nombre) {
    // Tu código aquí
    const estudiantesReturn = this.estudiantes.filter(e=>e.nombre.toUpperCase() == nombre.toUpperCase());
    return estudiantesReturn;
  }

  // TODO: Implementar método para buscar estudiante por apellido
  buscarEstudiantePorApellido(apellido) {
    // Tu código aquí
    const estudiantesReturn = this.estudiantes.filter(e=>e.apellido.toUpperCase() == apellido.toUpperCase());
    console.log("estudiantes encontrados: " + estudiantesReturn)
    return estudiantesReturn;
  }

  // TODO: Implementar método para listar estudiantes
  listarEstudiantes() {
    // Tu código aquí
    const estudiantesReturn = this.estudiantes;
    return estudiantesReturn;
  }
}

export { Estudiantes }
