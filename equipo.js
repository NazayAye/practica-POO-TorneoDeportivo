// equipo.js
export class Equipo {
  #nombre; // Encapsulado

  constructor(id, nombre) {
    this.id = id;
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }

  setNombre(nuevo) {
    if (nuevo && nuevo.trim() !== "") {
      this.#nombre = nuevo;
    }
  }
}
