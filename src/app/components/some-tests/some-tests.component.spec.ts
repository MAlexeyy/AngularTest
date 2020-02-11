import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeTestsComponent } from './some-tests.component';

describe('SomeTestsComponent', () => {
  let component: SomeTestsComponent;
  let fixture: ComponentFixture<SomeTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
