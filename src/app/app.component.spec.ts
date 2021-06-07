import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'
import { ServersComponent } from './servers/servers.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-first-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('Angular Basics');
  });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     console.log(`compiled is ` + (compiled == null ? '' : 'not') + ' null');
//     expect(compiled.querySelector('.content p').textContent).toContain('my-first-app app is running!');
//   });
});
