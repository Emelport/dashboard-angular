import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyTemperatureComponent } from './hourly-temperature.component';

describe('HourlyTemperatureComponent', () => {
  let component: HourlyTemperatureComponent;
  let fixture: ComponentFixture<HourlyTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlyTemperatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourlyTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
