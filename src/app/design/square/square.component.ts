import { Component, Input } from '@angular/core';
import { SquareInfos } from 'src/app/model/square';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input() infos!: SquareInfos;
  @Input() unit: string = "";
  @Input() fontSize: number = 5;
  @Input() size: number = 10;
  @Input() font: string = "'Nunito Sans', sans-serif";
}
