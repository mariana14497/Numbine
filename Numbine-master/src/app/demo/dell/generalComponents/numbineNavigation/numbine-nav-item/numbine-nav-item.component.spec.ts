import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbineNavItemComponent } from './numbine-nav-item.component';

describe('NumbineNavItemComponent', () => {
  let component: NumbineNavItemComponent;
  let fixture: ComponentFixture<NumbineNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbineNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbineNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
