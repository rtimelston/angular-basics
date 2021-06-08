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
  username = 'Unknown'

  onUsernameChange(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onClearUsername() {
    this.username = '';
  }
}
