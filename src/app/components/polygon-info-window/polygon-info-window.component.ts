import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapPolygon, GoogleMap, GoogleMapsModule } from '@angular/google-maps';
@Component({
  selector: 'app-polygon-info-window',
  standalone: true,
  imports: [CommonModule,GoogleMapsModule],
  templateUrl: './polygon-info-window.component.html',
  styleUrl: './polygon-info-window.component.css'
})
export class PolygonInfoWindowComponent implements OnInit{

  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;

  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 };

  polygonPaths: google.maps.LatLngLiteral[] = [
    { lat: 37.782, lng: -122.447 },
    { lat: 37.782, lng: -122.445 },
    { lat: 37.778, lng: -122.445 },
    { lat: 37.778, lng: -122.447 }
  ];

  polygonOptions: google.maps.PolygonOptions = {
    fillColor: 'red',
    fillOpacity: 0.5,
    strokeColor: 'red',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    clickable: true,
    editable: false,
    draggable: false
  };

  infoContent = 'Polygon Info Window Content';
  infoWindow = new google.maps.InfoWindow();

  ngOnInit(): void {}

  onPolygonClick(event: google.maps.MapMouseEvent) {
    this.infoWindow.setContent(this.infoContent);
    this.infoWindow.setPosition(event.latLng);
    this.infoWindow.open(this.map.googleMap);
  }

  onPolygonOut(event:google.maps.MapMouseEvent){
    this.infoWindow.close()
  }
}
