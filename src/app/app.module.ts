import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from '@angular/forms';

import { CurtainsComponent } from "./curtains/curtains.component";
import { InputsComponent } from "./inputs/inputs.component";
import { ParentComponent } from './parent/parent.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, CurtainsComponent, InputsComponent, ParentComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
