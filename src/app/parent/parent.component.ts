import { Component, OnInit } from "@angular/core";
import {
  DEFAULT_LARGEUR,
  DEFAULT_RETOUR,
  DEFAULT_DEVANTURE,
  DEFAULT_NOMBRE_PLIS,
  DEFAULT_TAILLE_PLIS,
  DEFAULT_NOMBRE_ESPACE
} from "../default";
@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  parentNumberPlis: number = DEFAULT_NOMBRE_PLIS;
  parentNumberSpace: number = DEFAULT_NOMBRE_ESPACE;
  parentTaillePlis: number = DEFAULT_TAILLE_PLIS;
  parentLargeurBrute: number = DEFAULT_LARGEUR;
  parentDevanture: number = DEFAULT_DEVANTURE;
  parentRetour: number = DEFAULT_RETOUR;
  parentLargeurEspace: number = +((DEFAULT_LARGEUR/DEFAULT_NOMBRE_ESPACE).toFixed(2));
  largeurTotale: number;

  constructor() {}

  ngOnInit() {}

  onPlisChange(i: number): void {
    this.parentNumberPlis = i;
    this.parentNumberSpace = this.parentNumberPlis - 1;
  }

  onSpaceChange(i: number): void {
    this.parentNumberSpace = i;
  }

  onTaillePlisChange(i: number): void {
    this.parentTaillePlis = i;
  }

  onLargeurBruteChange(i: number): void {
    this.parentLargeurBrute = i;
  }

  onDevantureChange(i: number): void {
    this.parentDevanture = i;
  }

  onRetourChange(i: number): void {
    this.parentRetour = i;
  }

  getResult(): number {
    return (
      this.parentRetour +
      this.parentDevanture +
      this.parentLargeurBrute +
      this.parentTaillePlis * this.parentNumberPlis
    );
  }

  onLargeurEspaceChange(i:number ):void{
    this.parentLargeurEspace = i;
  }
}
