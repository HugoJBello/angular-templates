import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExampleLibComponent } from './test-example-lib.component';

describe('TestExampleLibComponent', () => {
  let component: TestExampleLibComponent;
  let fixture: ComponentFixture<TestExampleLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestExampleLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestExampleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
