// servicioTorneo.js
import { Equipo } from "./equipo.js";
import { SorteoEquipos } from "./sorteoEquipos.js";

export class ServicioTorneo {
  constructor() {
    this.equipos = new Map(); // id → Equipo
    this.nextId = 1;
  }

  agregarEquipo(nombre) {
    if (!nombre || nombre.trim() === "") {
      console.log("⚠️ Nombre inválido");
      return;
    }
    this.equipos.set(this.nextId, new Equipo(this.nextId, nombre));
    console.log(`✅ Equipo agregado: ${nombre}`);
    this.nextId++;
  }

  eliminarEquipo(id) {
    if (this.equipos.delete(id)) {
      console.log("✅ Equipo eliminado");
    } else {
      console.log("⚠️ No existe equipo con ese ID");
    }
  }

  modificarEquipo(id, nuevoNombre) {
    const eq = this.equipos.get(id);
    if (eq && nuevoNombre && nuevoNombre.trim() !== "") {
      eq.setNombre(nuevoNombre);
      console.log("✅ Equipo modificado");
    } else {
      console.log("⚠️ No se pudo modificar");
    }
  }

  listarEquipos() {
    this.equipos.forEach((eq, id) => {
      console.log(`${id} - ${eq.getNombre()}`);
    });
  }

  sortearCuartos() {
    const lista = Array.from(this.equipos.values());
    const sorteo = new SorteoEquipos(
      1,
      new Date().toISOString().split("T")[0],
      "Sorteo de cuartos",
      lista
    );
    sorteo.ejecutarEvento();
  }
}
