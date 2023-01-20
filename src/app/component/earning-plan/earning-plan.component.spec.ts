import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningPlanComponent } from './earning-plan.component';

describe('EarningPlanComponent', () => {
  let component: EarningPlanComponent;
  let fixture: ComponentFixture<EarningPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
