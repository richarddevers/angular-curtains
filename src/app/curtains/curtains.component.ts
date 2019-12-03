import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";

import { DEFAULT_NOMBRE_PLIS, DEFAULT_NOMBRE_ESPACE } from "../default";

@Component({
  selector: "app-curtains",
  templateUrl: "./curtains.component.html",
  styleUrls: ["./curtains.component.css"]
})
export class CurtainsComponent implements OnInit {
  private _plis: number = DEFAULT_NOMBRE_PLIS;
  private _espaces: number = DEFAULT_NOMBRE_ESPACE;
  @Output() sharedEspaces = new EventEmitter<number>();

  get plis() {
    return this._plis;
  }

  @Input() set plis(i: number) {
    this._plis = i;
    this._espaces = this._plis - 1;
    this.sharedEspaces.emit(this._espaces);
  }

  get espaces() {
    return this._espaces;
  }

  constructor() {}

  ngOnInit() {}

  counter(i: number): Array<number> {
    return Array.from(Array(this.espaces).keys()).map(x => ++x);
  }
}
