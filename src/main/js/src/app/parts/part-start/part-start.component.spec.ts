import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartStartComponent } from './part-start.component';

describe('PartStartComponent', () => {
  let component: PartStartComponent;
  let fixture: ComponentFixture<PartStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
