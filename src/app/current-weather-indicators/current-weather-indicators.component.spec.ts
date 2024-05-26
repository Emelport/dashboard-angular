import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherIndicatorsComponent } from './current-weather-indicators.component';

describe('CurrentWeatherIndicatorsComponent', () => {
  let component: CurrentWeatherIndicatorsComponent;
  let fixture: ComponentFixture<CurrentWeatherIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentWeatherIndicatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentWeatherIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
