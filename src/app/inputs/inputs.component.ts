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

  plisNumberView: number = DEFAULT_NOMBRE_PLIS;
  spaceNumberView: number = DEFAULT_NOMBRE_ESPACE;

  DEFAULT_LARGEUR: number = DEFAULT_LARGEUR;
  DEFAULT_RETOUR: number = DEFAULT_RETOUR;
  DEFAULT_DEVANTURE: number = DEFAULT_DEVANTURE;
  DEFAULT_TAILLE_PLIS: number = DEFAULT_TAILLE_PLIS;

  constructor() {}

  ngOnInit() {}

  setPlis(i: string) {
    this.plisNumber.emit(+i);
    this.plisNumberView = +i;
    this.spaceNumberView = +i - 1;
  }

  setSpace(i: string) {
    this.plisNumber.emit(+i + 1);
    this.spaceNumberView = +i;
    this.plisNumberView = +i + 1;
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
