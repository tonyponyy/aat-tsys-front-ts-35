export let ej4 = () => {};

enum Materia {
  Matematicas = "Matematicas",
  Filosofia = "FilosofIa",
  Fisica = "Física",
}

interface Persona {
  nombre: string;
  edad: number;
  sexo: string;
}

class Estudiante implements Persona {
  nombre: string;
  edad: number;
  sexo: string;
  calificacion: number;

  constructor(nombre: string, edad: number, sexo: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.calificacion = Math.random() * 10;
  }

  hacerCampana(): boolean {
    return Math.random() < 0.5;
  }

  mostrarEstado(): void {
    console.log(
      "Estudiante " +
        this.nombre +
        ", Edad: " +
        this.edad +
        ", Sexo: " +
        this.sexo +
        ", Calificación: " +
        this.calificacion.toFixed(2)
    );
  }
}

class Profesor implements Persona {
  nombre: string;
  edad: number;
  sexo: string;
  materia: Materia;

  constructor(nombre: string, edad: number, sexo: string, materia: Materia) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.materia = materia;
  }

  noDisponible(): boolean {
    return Math.random() < 0.2;
  }

  mostrarEstado(): void {
    console.log(
      "Profesor " +
        this.nombre +
        ", Edad: " +
        this.edad +
        ", Sexo: " +
        this.sexo +
        ", Materia: " +
        this.materia
    );
  }
}

class Aula {
  id: number;
  maxEstudiantes: number;
  materia: Materia;
  estudiantes: Estudiante[];
  profesor: Profesor;

  constructor(
    id: number,
    maxEstudiantes: number,
    materia: Materia,
    profesor: Profesor
  ) {
    this.id = id;
    this.maxEstudiantes = maxEstudiantes;
    this.materia = materia;
    this.profesor = profesor;
    this.estudiantes = [];
  }

  puedeDarClase(): boolean {
    const porcentajeAlumnos = this.estudiantes.length / this.maxEstudiantes;
    return (
      !this.profesor.noDisponible() &&
      this.profesor.materia === this.materia &&
      porcentajeAlumnos > 0.5
    );
  }

  mostrarEstado(): void {
    console.log("Aula " + this.id + ", Materia: " + this.materia);
    this.profesor.mostrarEstado();
    console.log("Estudiantes en el aula:");
    for (let i = 0; i < this.estudiantes.length; i++) {
      this.estudiantes[i].mostrarEstado();
    }
  }
}

const profesorFilosofia = new Profesor(
  "Profesor Filósofo",
  35,
  "Masculino",
  Materia.Filosofia
);
const aulaFilosofia = new Aula(1, 20, Materia.Filosofia, profesorFilosofia);

const estudiantes = [
  new Estudiante("Estudiante1", 20, "Femenino"),
  new Estudiante("Estudiante2", 22, "Masculino"),
  new Estudiante("Estudiante3", 21, "Femenino"),
];

for (let i = 0; i < estudiantes.length; i++) {
  aulaFilosofia.estudiantes.push(estudiantes[i]);
}

aulaFilosofia.mostrarEstado();

if (aulaFilosofia.puedeDarClase()) {
  console.log("Se puede dar clase en el aula.");

  let estudiantesAprobadas = 0;
  let estudiantesAprobadosMasculinos = 0;

  for (let i = 0; i < aulaFilosofia.estudiantes.length; i++) {
    const estudiante = aulaFilosofia.estudiantes[i];
    if (estudiante.calificacion >= 5) {
      if (estudiante.sexo === "Femenino") {
        estudiantesAprobadas++;
      } else if (estudiante.sexo === "Masculino") {
        estudiantesAprobadosMasculinos++;
      }
    }
  }

  console.log("Estudiantes aprobadas: " + estudiantesAprobadas);
  console.log(
    "Estudiantes aprobados (masculinos): " + estudiantesAprobadosMasculinos
  );
} else {
  console.log("No se puede dar clase en el aula.");
}
