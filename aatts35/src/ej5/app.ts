export let ej5 = () => {};

class Pelicula {
  constructor(
    public titulo: string,
    public duracion: number,
    public edadMinima: number,
    public director: string
  ) {}
}

class Espectador {
  constructor(
    public nombre: string,
    public edad: number,
    public dinero: number
  ) {}
}

class Cine {
  private asientos: { [key: string]: boolean } = {};

  constructor(public peliculaActual: Pelicula, public precioEntrada: number) {
    // Inicializar asientos como libres
    for (let fila = 1; fila <= 8; fila++) {
      for (
        let columna = "A";
        columna <= "I";
        columna = String.fromCharCode(columna.charCodeAt(0) + 1)
      ) {
        this.asientos[`${fila} ${columna}`] = false;
      }
    }
  }

  private encontrarAsientoLibre(): string | null {
    for (let fila = 8; fila >= 1; fila--) {
      for (
        let columna = "A";
        columna <= "I";
        columna = String.fromCharCode(columna.charCodeAt(0) + 1)
      ) {
        const asiento = `${fila} ${columna}`;
        if (!this.asientos[asiento]) {
          return asiento;
        }
      }
    }
    return null;
  }

  private sentarEspectador(espectador: Espectador, asiento: string) {
    this.asientos[asiento] = true;
    console.log(`${espectador.nombre} se ha sentado en el asiento ${asiento}`);
  }

  verPelicula(espectador: Espectador) {
    if (
      espectador.edad >= this.peliculaActual.edadMinima &&
      espectador.dinero >= this.precioEntrada
    ) {
      const asientoLibre = this.encontrarAsientoLibre();
      if (asientoLibre) {
        this.sentarEspectador(espectador, asientoLibre);
      } else {
        console.log("no hay asientos libres.");
      }
    } else {
      console.log(
        espectador.nombre +
          " no cumple con los requisitos para ver la película."
      );
    }
  }
}

const pelicula = new Pelicula("Avatar", 120, 18, "James Cameron");
const cine = new Cine(pelicula, 10);

var nombres: string[] = [
  "Laura",
  "Jaime",
  "Sonia",
  "Pepe",
  "Alejandro",
  "Toni",
  "Leandro",
  "Carlos",
];
var apellidos: string[] = [
  "Fernandez",
  "Hernando",
  "Gonzalez",
  "Garcia",
  "Andreu",
  "Escobar",
  "Martinez",
];

nombres[Math.floor(Math.random() * nombres.length)] +
  " " +
  apellidos[Math.floor(Math.random() * apellidos.length)];

for (let i = 1; i <= 20; i++) {
  const espectador = new Espectador(
    nombres[Math.floor(Math.random() * nombres.length)] +
      " " +
      apellidos[Math.floor(Math.random() * apellidos.length)],
    Math.floor(Math.random() * 50) + 10,
    Math.random() * 50
  );
  cine.verPelicula(espectador);
}
