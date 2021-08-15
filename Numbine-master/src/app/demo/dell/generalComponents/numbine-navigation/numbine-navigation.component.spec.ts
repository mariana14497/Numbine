import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbineNavigationComponent } from './numbine-navigation.component';

describe('NumbineNavigationComponent', () => {
  let component: NumbineNavigationComponent;
  let fixture: ComponentFixture<NumbineNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbineNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbineNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
