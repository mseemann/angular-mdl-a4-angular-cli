import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MdlModule } from '@angular-mdl/core';
import { FormsModule } from '@angular/forms';
import { MdlSelectModule } from '@angular-mdl/select';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MdlModule,
        FormsModule,
        MdlSelectModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mdl-layout-title').textContent).toContain('app works!');
  }));
});
