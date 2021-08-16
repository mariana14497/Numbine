import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbineNavContentComponent } from './numbine-nav-content.component';

describe('NumbineNavContentComponent', () => {
  let component: NumbineNavContentComponent;
  let fixture: ComponentFixture<NumbineNavContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbineNavContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbineNavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
