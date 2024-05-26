import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTemperatureChartComponent } from './state-temperature-chart.component';

describe('StateTemperatureChartComponent', () => {
  let component: StateTemperatureChartComponent;
  let fixture: ComponentFixture<StateTemperatureChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateTemperatureChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StateTemperatureChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
