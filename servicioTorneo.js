// servicioTorneo.js
import { Equipo } from "./equipo.js";
import { Partido } from "./partido.js";
import { SorteoEquipos } from "./sorteoEquipos.js";

export class ServicioTorneo {
  constructor() {
    this.equipos = new Map(); // almacena equipos con id
    this.nextId = 1;          // id automático
  }

  agregarEquipo(nombre) {
    if (!nombre || nombre.trim() === "") {
      console.log("⚠️ Nombre inválido");
      return;
    }
    this.equipos.set(this.nextId, new Equipo(this.nextId, nombre));
    console.log(`Equipo agregado: ${nombre}`);
    this.nextId++;
  }

  eliminarEquipo(id) {
    if (this.equipos.delete(id)) {
      console.log("Equipo eliminado");
    } else {
      console.log("No existe equipo con ese ID");
    }
  }

  modificarEquipo(id, nuevoNombre) {
    const eq = this.equipos.get(id);
    if (eq && nuevoNombre && nuevoNombre.trim() !== "") {
      eq.setNombre(nuevoNombre);
      console.log("Equipo modificado");
    } else {
      console.log("No se pudo modificar");
    }
  }

  listarEquipos() {
    console.log("\n=== Equipos ===");
    this.equipos.forEach((eq, id) => {
      console.log(`${id} - ${eq.getNombre()}`);
    });
  }

  // Sorteo de semifinales (cuartos)
  sortearCuartos() {
    const lista = Array.from(this.equipos.values());
    if (lista.length !== 4) {
      console.log("Se necesitan exactamente 4 equipos para las semifinales");
      return;
    }

    const sorteo = new SorteoEquipos(
      1,
      new Date().toISOString().split("T")[0],
      "Sorteo de semifinales",
      lista
    );
    sorteo.ejecutarEvento();
  }

  // Sorteo de final
  sortearFinal() {
    const lista = Array.from(this.equipos.values());
    if (lista.length < 2) {
      console.log("Se necesitan al menos 2 equipos para la final");
      return;
    }

    // Elegimos aleatoriamente 2 equipos
    lista.sort(() => Math.random() - 0.5);
    const finalistas = lista.slice(0, 2);

    // Creamos el partido final
    const partidoFinal = new Partido(
      1,
      finalistas[0],
      finalistas[1]
    );

    console.log("\n=== Partido Final ===");
    console.log(
      `${partidoFinal.equipoLocal.getNombre()} vs ${partidoFinal.equipoVisitante.getNombre()}`
    );
  }
}
