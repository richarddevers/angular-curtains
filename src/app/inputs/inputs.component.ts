import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  DEFAULT_LARGEUR,
  DEFAULT_RETOUR,
  DEFAULT_DEVANTURE,
  DEFAULT_NOMBRE_PLIS,
  DEFAULT_TAILLE_PLIS,
  DEFAULT_NOMBRE_ESPACE
} from "../default";

@Component({
  selector: "app-inputs",
  templateUrl: "./inputs.component.html",
  styleUrls: ["./inputs.component.css"]
})
export class InputsComponent implements OnInit {
  @Output() plisNumber = new EventEmitter<number>();
  @Output() taillePlis = new EventEmitter<number>();
  @Output() largeurBrute = new EventEmitter<number>();
  @Output() devanture = new EventEmitter<number>();
  @Output() retour = new EventEmitter<number>();

  private DEFAULT_LARGEUR=DEFAULT_LARGEUR;
  private DEFAULT_RETOUR=DEFAULT_RETOUR;
  private DEFAULT_DEVANTURE=DEFAULT_DEVANTURE;
  private DEFAULT_NOMBRE_PLIS=DEFAULT_NOMBRE_PLIS;
  private DEFAULT_TAILLE_PLIS=DEFAULT_TAILLE_PLIS;
  private DEFAULT_NOMBRE_ESPACE=DEFAULT_NOMBRE_ESPACE;
  constructor() {}

  ngOnInit() {
  }

  changePlis(i: string) {
    this.plisNumber.emit(+i);
  }

  setTaillePlis(i: string) {
    this.taillePlis.emit(+i);
  }

  setLargeurBrute(i: string) {
    this.largeurBrute.emit(+i);
  }

  setDevanture(i: string) {
    this.devanture.emit(+i);
  }

  setRetour(i: any) {
    this.retour.emit(+i);
  }
}
