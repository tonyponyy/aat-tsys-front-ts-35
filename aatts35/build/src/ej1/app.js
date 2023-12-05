"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ej1 = void 0;
const ej1 = () => { };
exports.ej1 = ej1;
class Serie {
    constructor(titulo, creador) {
        this.titulo = titulo;
        this.numeroTemporadas = 3;
        this.entregado = false;
        this.genero = "Sin especificar";
        this.creador = creador;
    }
    getTitulo() {
        return this.titulo;
    }
    getNumeroTemporadas() {
        return this.numeroTemporadas;
    }
    getEntregado() {
        return this.entregado;
    }
    getGenero() {
        return this.genero;
    }
    getCreador() {
        return this.creador;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setNumeroTemporadas(numeroTemporadas) {
        this.numeroTemporadas = numeroTemporadas;
    }
    setEntregado(entregado) {
        this.entregado = entregado;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCreador(creador) {
        this.creador = creador;
    }
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    isEntregado() {
        return this.entregado;
    }
    compareTo(a) {
        return this.numeroTemporadas - a.getNumeroTemporadas();
    }
    toString() {
        return ("Serie: " +
            this.titulo +
            ", Temporadas: " +
            this.numeroTemporadas +
            ", Entregado: " +
            this.entregado +
            ", Género: " +
            this.genero +
            ", Creador: " +
            this.creador);
    }
}
class Videojuego {
    constructor(titulo, horasEstimadas, compania) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.entregado = false;
        this.genero = "Sin especificar";
        this.compania = compania;
    }
    getTitulo() {
        return this.titulo;
    }
    getHorasEstimadas() {
        return this.horasEstimadas;
    }
    getEntregado() {
        return this.entregado;
    }
    getGenero() {
        return this.genero;
    }
    getCompania() {
        return this.compania;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setHorasEstimadas(horasEstimadas) {
        this.horasEstimadas = horasEstimadas;
    }
    setEntregado(entregado) {
        this.entregado = entregado;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCompania(compania) {
        this.compania = compania;
    }
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    isEntregado() {
        return this.entregado;
    }
    compareTo(a) {
        return this.horasEstimadas - a.getHorasEstimadas();
    }
    toString() {
        return ("Videojuego: " +
            this.titulo +
            " Horas Estimadas:" +
            this.horasEstimadas +
            ", Entregado: " +
            this.entregado +
            ", Género: " +
            this.genero +
            " Compañía: " +
            this.compania);
    }
}
let series = [];
let videojuegos = [];
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
var contarEntregados = (arr) => {
    const entregados = [];
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
var serieConMasTemporadas = series[1];
var nTemporadas = 0;
for (let i = 0; i < series.length; i++) {
    if (series[i].getNumeroTemporadas() > nTemporadas) {
        nTemporadas = series[i].getNumeroTemporadas();
        serieConMasTemporadas = series[i];
    }
}
var videojuegoConMasHoras = videojuegos[1];
var nHoras = 0;
for (let i = 0; i < videojuegos.length; i++) {
    if (series[i].getNumeroTemporadas() > nTemporadas) {
        nHoras = series[i].getNumeroTemporadas();
        videojuegoConMasHoras = videojuegos[i];
    }
}
console.log("Serie mas larga:" + serieConMasTemporadas.getTitulo());
console.log("Videojuego con mas horas:" + videojuegoConMasHoras.getTitulo());
