import { Component, OnInit, Input } from "@angular/core";

import { DEFAULT_NOMBRE_PLIS, DEFAULT_NOMBRE_ESPACE } from "../default";

@Component({
  selector: "app-curtains",
  templateUrl: "./curtains.component.html",
  styleUrls: ["./curtains.component.css"]
})
export class CurtainsComponent implements OnInit {
  private _plis: number = DEFAULT_NOMBRE_PLIS;
  private espaces: number = DEFAULT_NOMBRE_ESPACE;

  @Input() set plis(i: number) {
    this._plis = i;
    this.espaces = this._plis - 1;
  }

  constructor() {}

  ngOnInit() {}

  counter(i: number): Array<number> {
    return Array.from(Array(this.espaces).keys()).map(x => ++x);
  }
}
