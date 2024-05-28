import { Component, Input } from '@angular/core';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-wind-speed-direction',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './wind-speed-direction.component.html',
  styleUrl: './wind-speed-direction.component.css'
})
export class WindSpeedDirectionComponent {
  @Input() data: any[] = []
  
  
  view: [number,number] = [487, 350];
  legend: boolean = true;
  legendPosition: LegendPosition = LegendPosition.Below;

  // colorScheme = {
  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  // };

}
 
