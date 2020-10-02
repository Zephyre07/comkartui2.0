import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCertificationBarchartComponent } from './stats-certification-barchart.component';

describe('StatsCertificationBarchartComponent', () => {
  let component: StatsCertificationBarchartComponent;
  let fixture: ComponentFixture<StatsCertificationBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsCertificationBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCertificationBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
