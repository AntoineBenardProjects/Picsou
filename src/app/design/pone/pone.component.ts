import { Component, HostBinding, Input, SimpleChanges } from '@angular/core';
import { PoneInfos } from 'src/app/model/square';

@Component({
  selector: 'pone',
  templateUrl: './pone.component.html',
  styleUrls: ['./pone.component.scss']
})
export class PoneComponent {

  @Input() infos!: PoneInfos;
  @HostBinding('style.--mainColor') mainColor: string = "";

  ngOnInit(){
    if(this.infos != null){
      this.mainColor = this.infos.color!;
    }
  }
  ngOnChanges(changes: SimpleChanges) : void{
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'infos':{
            if(changes[propName].currentValue !== changes[propName].previousValue){
              this.mainColor = this.infos.color!;
            }
          }
          break;
        }
      }
    }
  }

  constructor(){}


}
