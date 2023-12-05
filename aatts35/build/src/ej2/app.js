"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ej2 = void 0;
const ej2 = () => { };
exports.ej2 = ej2;
class Libro {
    constructor(isbn, titulo, autor, numPaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    getISBN() {
        return this.isbn;
    }
    setISBN(isbn) {
        this.isbn = isbn;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    getNumPaginas() {
        return this.numPaginas;
    }
    setNumPaginas(numPaginas) {
        this.numPaginas = numPaginas;
    }
    toString() {
        return ("El libro con ISBN " +
            this.isbn +
            " creado por " +
            this.autor +
            " tiene " +
            this.numPaginas +
            " páginas.");
    }
}
const libro1 = new Libro("123456789", "El dia de la marmota", "Ana rosa quintana", 500);
const libro2 = new Libro("987654321", "Mi autobiografia", "Anacleto ensaimada smith", 400);
console.log(libro1.toString());
console.log(libro2.toString());
if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
    console.log(libro1.getTitulo() + " tiene más páginas.");
}
else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
    console.log(libro2.getTitulo() + " tiene más páginas.");
}
else {
    console.log("Los dos libros tienen la misma cantidad de paginas.");
}
