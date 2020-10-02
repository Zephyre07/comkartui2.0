import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCertificationComponent } from './stats-certification.component';

describe('StatsCertificationComponent', () => {
  let component: StatsCertificationComponent;
  let fixture: ComponentFixture<StatsCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
