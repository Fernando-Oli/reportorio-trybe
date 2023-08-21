import IAgenda from "../interface/IAgenda";
import { ITenis } from "../interface/ITenis";
import Quadra from "./Quadra"
import normas from "../normas/normasDeUso"

export default class QuadraTenis extends Quadra {
  tenisData:ITenis = normas.tenis;
  public reserve<ITenis>(para:Date): IAgenda<ITenis> {
    const protocol = (Math.random() + 1).toString(30).substring(3); // course
    return {
      protocol,
      data: para,
      rules: this.tenisData as unknown as ITenis
    }
  }
}