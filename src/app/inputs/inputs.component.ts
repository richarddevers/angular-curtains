import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  DEFAULT_LARGEUR,
  DEFAULT_RETOUR,
  DEFAULT_DEVANTURE,
  DEFAULT_NOMBRE_PLIS,
  DEFAULT_TAILLE_PLIS,
  DEFAULT_NOMBRE_ESPACE,
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
  @Output() largeurEspace = new EventEmitter<number>();

  DEFAULT_LARGEUR: number = DEFAULT_LARGEUR;
  DEFAULT_RETOUR: number = DEFAULT_RETOUR;
  DEFAULT_DEVANTURE: number = DEFAULT_DEVANTURE;
  DEFAULT_TAILLE_PLIS: number = DEFAULT_TAILLE_PLIS;
  
  plisNumberView: number = DEFAULT_NOMBRE_PLIS;
  spaceNumberView: number = DEFAULT_NOMBRE_ESPACE;
  largeurBruteView: number = +DEFAULT_LARGEUR;
  largeurEspaceView: number = +(DEFAULT_LARGEUR / DEFAULT_NOMBRE_ESPACE).toFixed(2);

  constructor() { }

  ngOnInit() { }

  setLargeurEspace(i: string){
    const largeurEspace = +((+i).toFixed(2));
    const largeurBrute = +((largeurEspace * this.spaceNumberView).toFixed(2));

    this.largeurBruteView = +((largeurEspace * this.spaceNumberView).toFixed(2));
    this.largeurBrute.emit(largeurBrute);

    this.largeurEspaceView = largeurEspace;
    this.largeurEspace.emit(largeurEspace);
  }

  setPlis(i: string) {
    this.plisNumber.emit(+i);
    this.plisNumberView = +i;

    this.spaceNumberView = +i - 1;
    
    this.largeurBrute.emit(this.getLargeurBrute());
    this.largeurBruteView = this.getLargeurBrute();
  }

  setSpace(i: string) {
    this.spaceNumberView = +i;

    this.plisNumber.emit(+i + 1);
    this.plisNumberView = +i + 1;

    this.largeurBrute.emit(this.getLargeurBrute());
    this.largeurBruteView = this.getLargeurBrute();
  }

  setTaillePlis(i: string) {
    this.taillePlis.emit(+i);
  }

  setLargeurBrute(i: string) {
    this.largeurBrute.emit(+i);
    this.largeurBruteView = +i;

    const largEspace = +((+i/this.spaceNumberView).toFixed(2));
    this.largeurEspaceView = largEspace;
    this.largeurEspace.emit(largEspace);
  }

  setDevanture(i: string) {
    this.devanture.emit(+i);
  }

  setRetour(i: string) {
    this.retour.emit(+i);
  }

  getLargeurBrute():number{
    return +((this.spaceNumberView * this.largeurEspaceView).toFixed(2));
  }

}
