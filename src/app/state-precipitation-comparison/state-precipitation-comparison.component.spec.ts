import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePrecipitationComparisonComponent } from './state-precipitation-comparison.component';

describe('StatePrecipitationComparisonComponent', () => {
  let component: StatePrecipitationComparisonComponent;
  let fixture: ComponentFixture<StatePrecipitationComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatePrecipitationComparisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatePrecipitationComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
