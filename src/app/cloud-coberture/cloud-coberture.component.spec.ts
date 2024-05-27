import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudCobertureComponent } from './cloud-coberture.component';

describe('CloudCobertureComponent', () => {
  let component: CloudCobertureComponent;
  let fixture: ComponentFixture<CloudCobertureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudCobertureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloudCobertureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
