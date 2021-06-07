import { Component, OnInit } from '@angular/core';

@Component({
//   selector: 'app-servers', // select by element; this is preferred
//   selector: '[app-servers]', // select by attribute
  selector: '.app-servers', // select by class
  // Note: selection by id and pseudo attributes is not supported
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
