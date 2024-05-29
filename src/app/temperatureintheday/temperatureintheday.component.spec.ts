import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureinthedayComponent } from './temperatureintheday.component';

describe('TemperatureinthedayComponent', () => {
  let component: TemperatureinthedayComponent;
  let fixture: ComponentFixture<TemperatureinthedayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureinthedayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemperatureinthedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
