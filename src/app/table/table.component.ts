import { Component } from '@angular/core';
import { SquareInfos } from '../model/square';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  protected squareInfo: SquareInfos = {
    text: "Boulevard Malesherbes",
    value: 250,
    unit: '€',
    color: 'var(--red)'
  }
}
