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
  @Input() fontSize: number = 6;
  @Input() size: number = 12.5;
  @Input() font: string = "'Nunito Sans', sans-serif";

  @HostBinding('style.--mainColor') mainColor: string = "";
  @HostBinding('style.--filterColor') filterColor: string = "";

  ngOnInit(){
    if(this.infos != null){
      this.mainColor = this.infos.color!;
      if(this.infos.family === 'Gare')  this.mainColor = 'var(--black)';
      else if(this.infos.family === 'Chance')  this.mainColor = 'var(--green)';
      else if(this.infos.family === 'Taxes')  this.mainColor = 'var(--purple)';
      else if(this.infos.family === 'Jail')  this.mainColor = 'var(--white)';
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
              else if(this.infos.family === 'Chance')  this.mainColor = 'var(--green)';
              else if(this.infos.family === 'Taxes')  this.mainColor = 'var(--purple)';
              else if(this.infos.family === 'Jail')  this.mainColor = 'var(--white)';
            }
          }
          break;
        }
      }
    }
  }
  
}
