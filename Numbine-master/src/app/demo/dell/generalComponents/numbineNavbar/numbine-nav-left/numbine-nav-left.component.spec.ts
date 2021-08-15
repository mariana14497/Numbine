import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbineNavLeftComponent } from './numbine-nav-left.component';

describe('NumbineNavLeftComponent', () => {
  let component: NumbineNavLeftComponent;
  let fixture: ComponentFixture<NumbineNavLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbineNavLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbineNavLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
