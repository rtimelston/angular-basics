import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // select by element; this is preferred
  template: `
  <app-server></app-server>
  <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
