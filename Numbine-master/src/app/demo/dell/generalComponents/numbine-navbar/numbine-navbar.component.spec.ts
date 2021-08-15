import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbineNavbarComponent } from './numbine-navbar.component';

describe('NumbineNavbarComponent', () => {
  let component: NumbineNavbarComponent;
  let fixture: ComponentFixture<NumbineNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbineNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbineNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
