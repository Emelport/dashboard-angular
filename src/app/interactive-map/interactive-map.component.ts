import { Component, Input, NO_ERRORS_SCHEMA, OnChanges, SimpleChanges } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
import { Map } from 'leaflet';

@Component({
  selector: 'app-interactive-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './interactive-map.component.html',
  styleUrl: './interactive-map.component.css'
})
export class InteractiveMapComponent implements OnChanges {

<<<<<<< HEAD
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
=======
  icono:string = `./src/img/set04/big/1.png`

  @Input() options: any;
  @Input() prueba:any;
  map: Map | undefined;
>>>>>>> main

   yIcon = L.icon({
    iconUrl: this.icono,
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
   
});
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes:', changes);
    console.log('prueba:',changes['prueba']);

    const newLat = changes['prueba'].currentValue.lat;
    const newLng = changes['prueba'].currentValue.lon;
    const newZoom = changes['prueba'].currentValue.zoom;
    this.map?.setView(L.latLng(newLat, newLng), newZoom);
    L.marker([newLat, newLng], {icon: this.yIcon}).addTo(this.map!);

  }

  onMapReady(map: L.Map) {
    this.map = map;
  }
}