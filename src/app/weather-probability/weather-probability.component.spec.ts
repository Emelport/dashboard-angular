import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherProbabilityComponent } from './weather-probability.component';

describe('WeatherProbabilityComponent', () => {
  let component: WeatherProbabilityComponent;
  let fixture: ComponentFixture<WeatherProbabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherProbabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherProbabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
