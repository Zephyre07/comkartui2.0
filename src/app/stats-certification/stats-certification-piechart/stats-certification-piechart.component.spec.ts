import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCertificationPiechartComponent } from './stats-certification-piechart.component';

describe('StatsCertificationPiechartComponent', () => {
  let component: StatsCertificationPiechartComponent;
  let fixture: ComponentFixture<StatsCertificationPiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsCertificationPiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCertificationPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
