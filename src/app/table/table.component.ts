import { Component } from '@angular/core';
import { PoneInfos, SquareInfos } from '../model/square';
import { Paris } from 'src/assets/gameData/tables';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  protected squaresLeft: SquareInfos[] = [];
  protected squaresRight: SquareInfos[] = [];
  protected squaresTop: SquareInfos[] = [];
  protected squaresBottom: SquareInfos[] = [];
  protected pone: PoneInfos = {
    color: 'var(--purple)'
  }

  constructor(){}

  ngOnInit(){
    Paris.forEach((element: SquareInfos,index: number) => {
      if(index < 14){
        this.squaresLeft.push(element);
      }
      else if(index < 20 && index >=14){
        this.squaresTop.push(element);
      }
      else if(index < 34 && index >= 20){
        this.squaresRight.push(element);
      }
      else{
        this.squaresBottom.push(element);
      }
    });
    console.log(this.squaresBottom)
  }
  
}
