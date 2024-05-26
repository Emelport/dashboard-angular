import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalTemperatureComparisonComponent } from './municipal-temperature-comparison.component';

describe('MunicipalTemperatureComparisonComponent', () => {
  let component: MunicipalTemperatureComparisonComponent;
  let fixture: ComponentFixture<MunicipalTemperatureComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipalTemperatureComparisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MunicipalTemperatureComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
