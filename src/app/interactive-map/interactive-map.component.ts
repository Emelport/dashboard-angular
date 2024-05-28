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

  // comillas invertidas
  @Input() icono:string = '';

  @Input() options: any;
  @Input() prueba:any;
  map: Map | undefined;

   
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes:', changes);
    console.log('prueba:',changes['prueba']);

    const newLat = changes['prueba'].currentValue.lat;
    const newLng = changes['prueba'].currentValue.lon;
    const newZoom = changes['prueba'].currentValue.zoom;
    this.map?.setView(L.latLng(newLat, newLng), newZoom);

    const yIcon = L.icon({
      iconUrl: this.icono,
      iconSize: [178, 195],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
     
  });
    L.marker([newLat, newLng], {icon: yIcon}).addTo(this.map!);

  }

  onMapReady(map: L.Map) {
    this.map = map;
  }
}