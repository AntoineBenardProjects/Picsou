import { Component, HostBinding, Input, SimpleChanges } from '@angular/core';
import { SquareInfos } from 'src/app/model/square';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input() infos!: SquareInfos;
  @Input() unit: string = "";
  @Input() fontSize: number = 7;
  @Input() size: number = 15;
  @Input() font: string = "'Nunito Sans', sans-serif";

  @HostBinding('style.--mainColor') mainColor: string = "";

  ngOnInit(){
    if(this.infos != null){
      this.mainColor = this.infos.color!;
      if(this.infos.family === 'Gare')  this.mainColor = 'var(--black)';
    }
  }
  ngOnChanges(changes: SimpleChanges) : void{
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'infos':{
            if(changes[propName].currentValue !== changes[propName].previousValue){
              this.mainColor = this.infos.color!;
              if(this.infos.family === 'Gare')  this.mainColor = 'var(--black)';
            }
          }
          break;
        }
      }
    }
  }
}
