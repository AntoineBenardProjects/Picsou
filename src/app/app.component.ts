import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rainte';

  ngOnInit() {
    const colors = new Map([
      ['white', '#F7F0F5'],
      ['black', '#020202'],
      ['green', '#386641'],
      ['red', '#EF5D60'],
      ['purple', '#645E9D'],
    ])

    Array.from(colors.entries()).forEach(([name, value]) => {
      document.body.style.setProperty(`--${name}`, value);
    })

  }
}
