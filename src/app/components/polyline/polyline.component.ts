import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-polyline',
  standalone: true,
  imports: [CommonModule,GoogleMapsModule],
  templateUrl: './polyline.component.html',
  styleUrl: './polyline.component.css'
})
export class PolylineComponent {

  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;

  infoWindow = new google.maps.InfoWindow();
  infoContent = 'Area Details';

  circleCenter: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  radius = 1000000;

  polylineOptions: google.maps.PolylineOptions = {
    strokeColor: '#4CB4FF',
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    editable: false,
    draggable: false,
    geodesic: false
  };

  polygonOptions: google.maps.PolygonOptions = {
    fillColor: 'red',
    fillOpacity: 0.5,
    strokeColor: 'green',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    clickable: false,
    editable: false,
    draggable: false
  };

  polygonPaths: google.maps.LatLngLiteral[][] = [];

  zoom = 4;
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  vertices: google.maps.LatLngLiteral[] = [];

  ngOnInit(): void {}

  onMapClick(event: google.maps.MapMouseEvent) {
 
    if (event.latLng) {
      this.vertices.push(event.latLng.toJSON());
    }
  }

  // getPolylinePaths(): google.maps.LatLngLiteral[] {
  //   return this.vertices;
  // }

  createPolygon() {
    if (this.vertices.length > 0) {
      this.polygonPaths.push([...this.vertices]);
      this.vertices = [];
    }
  }

  onPolygonMouseOver(event: google.maps.MapMouseEvent) {
    console.log(event)
    console.log("hey")
    if (event.latLng) {
      this.infoWindow.setContent(this.infoContent);
      this.infoWindow.setPosition(event.latLng);
      this.infoWindow.open(this.map.googleMap);
    }
  }

  onPolygonMouseOut() {
    this.infoWindow.close();
  }

}
