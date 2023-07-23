import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { SquareModule } from '../design/square/square.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    BrowserModule,
    TableRoutingModule,
    SquareModule
  ],
  providers: []
})
export class TableModule { }
