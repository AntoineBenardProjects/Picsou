import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SquareComponent } from './square.component';

@NgModule({
  declarations: [SquareComponent],
  imports: [
    BrowserModule
  ],
  exports: [SquareComponent]
})
export class SquareModule { }
