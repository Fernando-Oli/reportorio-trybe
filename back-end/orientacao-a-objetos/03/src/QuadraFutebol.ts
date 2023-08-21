import IAgenda from "../interface/IAgenda";
import Quadra from "./Quadra";
import normas from "../normas/normasDeUso";

export default class QuadraFutebol extends Quadra {
  public futebolData = normas.futebol;
  public reserve<IFutebol>(para: Date): IAgenda<IFutebol> {
    const protocol = (Math.random() + 1).toString(30).substring(3); // course
    return {
      protocol,
      data: para,
      rules: this.futebolData as unknown as IFutebol // course
    }
    }
}