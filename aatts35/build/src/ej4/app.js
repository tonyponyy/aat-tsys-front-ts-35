"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ej4 = void 0;
let ej4 = () => { };
exports.ej4 = ej4;
var Materia;
(function (Materia) {
    Materia["Matematicas"] = "Matematicas";
    Materia["Filosofia"] = "FilosofIa";
    Materia["Fisica"] = "F\u00EDsica";
})(Materia || (Materia = {}));
class Estudiante {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.calificacion = Math.random() * 10;
    }
    hacerCampana() {
        return Math.random() < 0.5;
    }
    mostrarEstado() {
        console.log("Estudiante " +
            this.nombre +
            ", Edad: " +
            this.edad +
            ", Sexo: " +
            this.sexo +
            ", Calificación: " +
            this.calificacion.toFixed(2));
    }
}
class Profesor {
    constructor(nombre, edad, sexo, materia) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.materia = materia;
    }
    noDisponible() {
        return Math.random() < 0.2;
    }
    mostrarEstado() {
        console.log("Profesor " +
            this.nombre +
            ", Edad: " +
            this.edad +
            ", Sexo: " +
            this.sexo +
            ", Materia: " +
            this.materia);
    }
}
class Aula {
    constructor(id, maxEstudiantes, materia, profesor) {
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materia = materia;
        this.profesor = profesor;
        this.estudiantes = [];
    }
    puedeDarClase() {
        const porcentajeAlumnos = this.estudiantes.length / this.maxEstudiantes;
        return (!this.profesor.noDisponible() &&
            this.profesor.materia === this.materia &&
            porcentajeAlumnos > 0.5);
    }
    mostrarEstado() {
        console.log("Aula " + this.id + ", Materia: " + this.materia);
        this.profesor.mostrarEstado();
        console.log("Estudiantes en el aula:");
        for (let i = 0; i < this.estudiantes.length; i++) {
            this.estudiantes[i].mostrarEstado();
        }
    }
}
const profesorFilosofia = new Profesor("Profesor Filósofo", 35, "Masculino", Materia.Filosofia);
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
            }
            else if (estudiante.sexo === "Masculino") {
                estudiantesAprobadosMasculinos++;
            }
        }
    }
    console.log("Estudiantes aprobadas: " + estudiantesAprobadas);
    console.log("Estudiantes aprobados (masculinos): " + estudiantesAprobadosMasculinos);
}
else {
    console.log("No se puede dar clase en el aula.");
}
