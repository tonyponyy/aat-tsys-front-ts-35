export const ej2 = () => {};
class Libro {
  private isbn: string;
  private titulo: string;
  private autor: string;
  private numPaginas: number;

  constructor(isbn: string, titulo: string, autor: string, numPaginas: number) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }

  getISBN(): string {
    return this.isbn;
  }

  setISBN(isbn: string): void {
    this.isbn = isbn;
  }

  getTitulo(): string {
    return this.titulo;
  }

  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  getAutor(): string {
    return this.autor;
  }

  setAutor(autor: string): void {
    this.autor = autor;
  }

  getNumPaginas(): number {
    return this.numPaginas;
  }

  setNumPaginas(numPaginas: number): void {
    this.numPaginas = numPaginas;
  }

  toString(): string {
    return (
      "El libro con ISBN " +
      this.isbn +
      " creado por " +
      this.autor +
      " tiene " +
      this.numPaginas +
      " páginas."
    );
  }
}

const libro1 = new Libro(
  "123456789",
  "El dia de la marmota",
  "Ana rosa quintana",
  500
);
const libro2 = new Libro(
  "987654321",
  "Mi autobiografia",
  "Anacleto ensaimada smith",
  400
);

console.log(libro1.toString());
console.log(libro2.toString());

if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
  console.log(libro1.getTitulo() + " tiene más páginas.");
} else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
  console.log(libro2.getTitulo() + " tiene más páginas.");
} else {
  console.log("Los dos libros tienen la misma cantidad de paginas.");
}
