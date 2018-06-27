import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CwsCallTestComponent } from './csw-call-test.component';

describe('CwsCallTestComponent', () => {
  let component: CwsCallTestComponent;
  let fixture: ComponentFixture<CwsCallTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwsCallTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CwsCallTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
