// sorteoEquipos.js
import { Evento } from "./evento.js";
import { Partido } from "./partido.js";

export class SorteoEquipos extends Evento {
  constructor(id, fecha, descripcion, equipos) {
    super(id, fecha, descripcion);
    this.equipos = equipos; // Array de objetos Equipo
    this.enfrentamientos = [];
  }

  ejecutarEvento() {
    if (this.equipos.length !== 8) {
      console.log("⚠️ Se necesitan exactamente 8 equipos para cuartos");
      return;
    }
    this.enfrentamientos = [];
    // Mezclar aleatoriamente
    this.equipos.sort(() => Math.random() - 0.5);
    for (let i = 0; i < this.equipos.length; i += 2) {
      const p = new Partido(
        i / 2 + 1,
        this.equipos[i],
        this.equipos[i + 1]
      );
      this.enfrentamientos.push(p);
    }
    console.log("🏆 Sorteo completado!");
    this.mostrarEnfrentamientos();
  }

  mostrarEnfrentamientos() {
    this.enfrentamientos.forEach(p => {
      console.log(
        `Partido ${p.id}: ${p.equipoLocal.getNombre()} vs ${p.equipoVisitante.getNombre()}`
      );
    });
  }
}
