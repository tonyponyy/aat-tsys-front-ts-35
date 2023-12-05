"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ej3 = void 0;
let ej3 = () => { };
exports.ej3 = ej3;
class Raices {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminante() {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }
    tieneRaices() {
        return this.getDiscriminante() >= 0;
    }
    tieneRaiz() {
        return this.getDiscriminante() === 0;
    }
    calcular() {
        const discriminante = this.getDiscriminante();
        if (discriminante > 0) {
            const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log("Soluciones: " + raiz1 + " y " + raiz2);
        }
        else if (discriminante === 0) {
            const raiz = -this.b / (2 * this.a);
            console.log("Solucion:" + raiz);
        }
        else {
            console.log("No hay solucion");
        }
    }
    obtenerRaices() {
        const discriminante = this.getDiscriminante();
        if (discriminante >= 0) {
            const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log("Raíces: " + raiz1 + " y " + raiz2);
        }
        else {
            console.log("No hay raíces reales");
        }
    }
    obtenerRaiz() {
        const discriminante = this.getDiscriminante();
        if (discriminante === 0) {
            const raiz = -this.b / (2 * this.a);
            console.log("Unica raiz:" + raiz);
        }
        else {
            console.log("No hay raiz unica");
        }
    }
}
const ecuacion = new Raices(1, -3, 2);
console.log("Discriminante :" + ecuacion.getDiscriminante());
console.log("Tiene raices? " + ecuacion.tieneRaices());
console.log("Tiene raiz unica?" + ecuacion.tieneRaiz());
ecuacion.calcular();
ecuacion.obtenerRaices();
ecuacion.obtenerRaiz();
