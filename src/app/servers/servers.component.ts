import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // select by element; this is preferred
//   template: `
//   <app-server></app-server>
//   <app-server></app-server>
//   `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    if(event) {
      this.serverName = (<HTMLInputElement>event.target).value;
    }
  }

}
