import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindSpeedDirectionComponent } from './wind-speed-direction.component';

describe('WindSpeedDirectionComponent', () => {
  let component: WindSpeedDirectionComponent;
  let fixture: ComponentFixture<WindSpeedDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindSpeedDirectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindSpeedDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
