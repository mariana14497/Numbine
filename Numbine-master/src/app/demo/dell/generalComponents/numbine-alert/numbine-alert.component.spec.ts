import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbineAlertComponent } from './numbine-alert.component';

describe('NumbineAlertComponent', () => {
  let component: NumbineAlertComponent;
  let fixture: ComponentFixture<NumbineAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbineAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbineAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
