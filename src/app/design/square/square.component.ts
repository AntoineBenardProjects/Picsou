import { Component, Input } from '@angular/core';
import { SquareInfos } from 'src/app/model/square';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input() infos!: SquareInfos;
}
