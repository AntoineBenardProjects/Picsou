import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { SquareModule } from '../design/square/square.module';
import { PoneModule } from '../design/pone/pone.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    BrowserModule,
    TableRoutingModule,
    SquareModule,
    PoneModule
  ],
  providers: []
})
export class TableModule { }
