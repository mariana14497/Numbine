import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbineNavGroupComponent } from './numbine-nav-group.component';

describe('NumbineNavGroupComponent', () => {
  let component: NumbineNavGroupComponent;
  let fixture: ComponentFixture<NumbineNavGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbineNavGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbineNavGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
