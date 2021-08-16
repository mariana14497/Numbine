import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbineNavRightComponent } from './numbine-nav-right.component';

describe('NumbineNavRightComponent', () => {
  let component: NumbineNavRightComponent;
  let fixture: ComponentFixture<NumbineNavRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbineNavRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbineNavRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
