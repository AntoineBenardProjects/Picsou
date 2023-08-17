import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PoneComponent } from './pone.component';

@NgModule({
  declarations: [PoneComponent],
  imports: [
    BrowserModule
  ],
  exports: [PoneComponent]
})
export class PoneModule { }
