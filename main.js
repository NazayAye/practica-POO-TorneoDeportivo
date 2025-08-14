// main.js
import readline from "readline";
import { ServicioTorneo } from "./servicioTorneo.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const servicio = new ServicioTorneo();

function menu() {
  console.log("\n=== Torneo  ===");
  console.log("1. Agregar equipo");
  console.log("2. Eliminar equipo");
  console.log("3. Modificar equipo");
  console.log("4. Listar equipos");
  console.log("5. Sortear semifinales");
  console.log("6. Salir");

  rl.question("Opción: ", (op) => {
    switch (op.trim()) {
      case "1":
        rl.question("Nombre del equipo: ", nombre => {
          servicio.agregarEquipo(nombre);
          menu();
        });
        break;
      case "2":
        rl.question("ID a eliminar: ", id => {
          servicio.eliminarEquipo(Number(id));
          menu();
        });
        break;
      case "3":
        rl.question("ID a modificar: ", id => {
          rl.question("Nuevo nombre: ", nombre => {
            servicio.modificarEquipo(Number(id), nombre);
            menu();
          });
        });
        break;
      case "4":
        servicio.listarEquipos();
        menu();
        break;
      case "5":
        servicio.sortearCuartos();
        menu();
        break;
      case "6":
        console.log("Saliendo...");
        rl.close();
        break;
      default:
        console.log("Opción inválida");
        menu();
    }
  });
}

menu();
