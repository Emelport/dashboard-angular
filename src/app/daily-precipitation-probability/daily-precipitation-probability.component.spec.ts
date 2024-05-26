import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPrecipitationProbabilityComponent } from './daily-precipitation-probability.component';

describe('DailyPrecipitationProbabilityComponent', () => {
  let component: DailyPrecipitationProbabilityComponent;
  let fixture: ComponentFixture<DailyPrecipitationProbabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyPrecipitationProbabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyPrecipitationProbabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
