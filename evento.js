export class Evento {
  constructor(id, fecha, descripcion) {
    this.id = id;
    this.fecha = fecha;
    this.descripcion = descripcion;
  }

  ejecutarEvento() {
    throw new Error("Método abstracto, implementar en subclase");
  }
}
