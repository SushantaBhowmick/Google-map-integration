import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MarkerService } from '../../service/marker.service';

@Component({
  selector: 'app-advanced-marker',
  standalone: true,
  imports: [CommonModule,GoogleMapsModule],
  templateUrl: './advanced-marker.component.html',
  styleUrl: './advanced-marker.component.css'
})
export class AdvancedMarkerComponent {

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  
  constructor(
    public markerService:MarkerService
  ){

  }

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 4;

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }

  openInfoWindow(marker: MapMarker, position:any) {
    if (this.infoWindow != undefined) {
      this.infoWindow.open(marker);
      this.markerService.openInfoWindow(marker,position)
    }
  }

}
