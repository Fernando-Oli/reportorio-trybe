import IAgenda from "../interface/IAgenda";
// src/Quadra.ts
abstract class Quadra {
  abstract reserve<T>(data: Date): IAgenda<T>;
}

export default Quadra;