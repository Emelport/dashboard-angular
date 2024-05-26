import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTemperatureTrendComponent } from './daily-temperature-trend.component';

describe('DailyTemperatureTrendComponent', () => {
  let component: DailyTemperatureTrendComponent;
  let fixture: ComponentFixture<DailyTemperatureTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyTemperatureTrendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyTemperatureTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
