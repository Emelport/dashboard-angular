import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';


@Component({
  selector: 'app-interactive-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './interactive-map.component.html',
  styleUrl: './interactive-map.component.css'
})
export class InteractiveMapComponent {


  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 7,
    // Los Mochis, Sinaloa, Mexico
    center: L.latLng(25.7959, -108.9961)
  };

}
