import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbineNavCollapseComponent } from './numbine-nav-collapse.component';

describe('NumbineNavCollapseComponent', () => {
  let component: NumbineNavCollapseComponent;
  let fixture: ComponentFixture<NumbineNavCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbineNavCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbineNavCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
