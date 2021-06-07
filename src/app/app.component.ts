import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
  styles: [`
    p {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  name = 'Angular Basics';
}
