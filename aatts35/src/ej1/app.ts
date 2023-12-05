export const ej1 = () => {};
interface Entregable {
  entregar(): void;
  devolver(): void;
  isEntregado(): boolean;
  compareTo(a: Entregable): number;
}

class Serie implements Entregable {
  private titulo: string;
  private numeroTemporadas: number;
  private entregado: boolean;
  private genero: string;
  private creador: string;

  constructor(titulo: string, creador: string) {
    this.titulo = titulo;
    this.numeroTemporadas = 3;
    this.entregado = false;
    this.genero = "Sin especificar";
    this.creador = creador;
  }

  getTitulo(): string {
    return this.titulo;
  }

  getNumeroTemporadas(): number {
    return this.numeroTemporadas;
  }

  getEntregado(): boolean {
    return this.entregado;
  }

  getGenero(): string {
    return this.genero;
  }

  getCreador(): string {
    return this.creador;
  }

  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  setNumeroTemporadas(numeroTemporadas: number): void {
    this.numeroTemporadas = numeroTemporadas;
  }

  setEntregado(entregado: boolean): void {
    this.entregado = entregado;
  }

  setGenero(genero: string): void {
    this.genero = genero;
  }

  setCreador(creador: string): void {
    this.creador = creador;
  }

  entregar(): void {
    this.entregado = true;
  }

  devolver(): void {
    this.entregado = false;
  }

  isEntregado(): boolean {
    return this.entregado;
  }

  compareTo(a: Serie): number {
    return this.numeroTemporadas - a.getNumeroTemporadas();
  }

  toString(): string {
    return (
      "Serie: " +
      this.titulo +
      ", Temporadas: " +
      this.numeroTemporadas +
      ", Entregado: " +
      this.entregado +
      ", Género: " +
      this.genero +
      ", Creador: " +
      this.creador
    );
  }
}

class Videojuego implements Entregable {
  private titulo: string;
  private horasEstimadas: number;
  private entregado: boolean;
  private genero: string;
  private compania: string;

  constructor(titulo: string, horasEstimadas: number, compania: string) {
    this.titulo = titulo;
    this.horasEstimadas = horasEstimadas;
    this.entregado = false;
    this.genero = "Sin especificar";
    this.compania = compania;
  }

  getTitulo(): string {
    return this.titulo;
  }

  getHorasEstimadas(): number {
    return this.horasEstimadas;
  }

  getEntregado(): boolean {
    return this.entregado;
  }

  getGenero(): string {
    return this.genero;
  }

  getCompania(): string {
    return this.compania;
  }

  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  setHorasEstimadas(horasEstimadas: number): void {
    this.horasEstimadas = horasEstimadas;
  }

  setEntregado(entregado: boolean): void {
    this.entregado = entregado;
  }

  setGenero(genero: string): void {
    this.genero = genero;
  }

  setCompania(compania: string): void {
    this.compania = compania;
  }

  entregar(): void {
    this.entregado = true;
  }

  devolver(): void {
    this.entregado = false;
  }

  isEntregado(): boolean {
    return this.entregado;
  }

  compareTo(a: Videojuego): number {
    return this.horasEstimadas - a.getHorasEstimadas();
  }

  toString(): string {
    return (
      "Videojuego: " +
      this.titulo +
      " Horas Estimadas:" +
      this.horasEstimadas +
      ", Entregado: " +
      this.entregado +
      ", Género: " +
      this.genero +
      " Compañía: " +
      this.compania
    );
  }
}

let series: Serie[] = [];
let videojuegos: Videojuego[] = [];

series[0] = new Serie("Las desventuras de tim", "Vince Gilligan");
series[1] = new Serie("Harry potter la serie", "George R. R. Martin");
series[2] = new Serie("Hanna Montana", "Hermanos Duffer");
series[3] = new Serie("Fargo", "Lauren Schmidt Hissrich");
series[4] = new Serie("Bob's burguers", "Jon Favreau");

videojuegos[0] = new Videojuego("Doom", 50, "id software");
videojuegos[1] = new Videojuego("Comander Keen", 60, "id software");
videojuegos[2] = new Videojuego("Wolfenstein", 20, "id software");
videojuegos[3] = new Videojuego("Gatojuego", 40, "Nintendo");
videojuegos[4] = new Videojuego("Cyberpunk 2077", 70, "CD Projekt");

series[0].entregar();
series[2].entregar();
videojuegos[1].entregar();
videojuegos[3].entregar();

var contarEntregados = (arr: Entregable[]): Entregable[] => {
  const entregados: Entregable[] = [];

  for (const item of arr) {
    if (item.isEntregado()) {
      entregados.push(item);
    }
  }

  return entregados;
};

let seriesEntregadas = contarEntregados(series);
let videojuegosEntregados = contarEntregados(videojuegos);

console.log("Series entregadas:", seriesEntregadas.length);
console.log("Videojuegos entregados:", videojuegosEntregados.length);

var serieConMasTemporadas: Serie = series[1];
var nTemporadas = 0;
for (let i = 0; i < series.length; i++) {
  if (series[i].getNumeroTemporadas() > nTemporadas) {
    nTemporadas = series[i].getNumeroTemporadas();
    serieConMasTemporadas = series[i];
  }
}

var videojuegoConMasHoras: Videojuego = videojuegos[1];
var nHoras = 0;
for (let i = 0; i < videojuegos.length; i++) {
  if (series[i].getNumeroTemporadas() > nTemporadas) {
    nHoras = series[i].getNumeroTemporadas();
    videojuegoConMasHoras = videojuegos[i];
  }
}

console.log("Serie mas larga:" + serieConMasTemporadas.getTitulo());

console.log("Videojuego con mas horas:" + videojuegoConMasHoras.getTitulo());
