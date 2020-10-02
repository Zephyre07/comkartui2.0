import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCertificationDougnutComponent } from './stats-certification-dougnut.component';

describe('StatsCertificationDougnutComponent', () => {
  let component: StatsCertificationDougnutComponent;
  let fixture: ComponentFixture<StatsCertificationDougnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsCertificationDougnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCertificationDougnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
