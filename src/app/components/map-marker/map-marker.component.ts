import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map-marker',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.css']
})
export class MapMarkerComponent implements OnInit {

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  center: google.maps.LatLngLiteral = {lat: 33.3868281, lng: -84.4913699};
  markerPositions: google.maps.LatLngLiteral[] = [];

  zoom = 10;
  infoWindowContent: string = '';
  geocodingUrl: string = 'https://maps.googleapis.com/maps/api/geocode/json';

  polygons: { vertices: google.maps.LatLngLiteral[], options: google.maps.PolygonOptions }[] = [
    {
      vertices: [
        { lat: 13, lng: 13 },
        { lat: -13, lng: 0 },
        { lat: 13, lng: -13 },
      ],
      options: {
        fillColor: 'red',
        fillOpacity: 0.35,
        strokeColor: 'red',
        strokeOpacity: 0.8,
        strokeWeight: 2,
      }
    },
    {
      vertices: [
        { lat: 20, lng: 20 },
        { lat: 10, lng: 10 },
        { lat: 20, lng: 0 },
      ],
      options: {
        fillColor: 'blue',
        fillOpacity: 0.35,
        strokeColor: 'blue',
        strokeOpacity: 0.8,
        strokeWeight: 2,
      }
    },
    {
      vertices: [
        { lat: 5, lng: 25 },
        { lat: 15, lng: 35 },
        { lat: 25, lng: 25 },
        { lat: 15, lng: 15 },
      ],
      options: {
        fillColor: 'green',
        fillOpacity: 0.4,
        strokeColor: 'green',
        strokeOpacity: 0.9,
        strokeWeight: 2,
      }
    },
    {
      vertices: [
        { lat: -10, lng: -10 },
        { lat: -20, lng: -20 },
        { lat: -10, lng: -30 },
        { lat: 0, lng: -20 },
      ],
      options: {
        fillColor: 'purple',
        fillOpacity: 0.5,
        strokeColor: 'purple',
        strokeOpacity: 0.9,
        strokeWeight: 3,
      }
    },
    {
      vertices: [
        { lat: 30, lng: -20 },
        { lat: 40, lng: -30 },
        { lat: 50, lng: -20 },
        { lat: 40, lng: -10 },
      ],
      options: {
        fillColor: 'orange',
        fillOpacity: 0.6,
        strokeColor: 'orange',
        strokeOpacity: 0.9,
        strokeWeight: 2,
      }
    },
    {
      vertices: [
        { lat: -5, lng: 0 },
        { lat: -15, lng: 10 },
        { lat: -5, lng: 20 },
        { lat: 5, lng: 10 },
      ],
      options: {
        fillColor: 'cyan',
        fillOpacity: 0.5,
        strokeColor: 'cyan',
        strokeOpacity: 0.8,
        strokeWeight: 2,
      }
    }
  ];
  

  polygonOptions: google.maps.PolygonOptions = {
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    clickable: false,
    editable: false
  };
  
  
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
  }

  
  
  addMarker(event: google.maps.MapMouseEvent) {
    console.log(event.latLng)
    console.log(event.latLng?.toJSON())
    if (event.latLng != null) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  console.log(this.markerPositions)

  }

  openInfoWindow(marker: MapMarker, index: number) {
    console.log(this.markerPositions[index])
    const position = this.markerPositions[index];
    this.fetchAddress(position.lat, position.lng).subscribe((response: any) => {
      if (response.status === 'OK' && response.results.length > 0) {
        this.infoWindowContent = response.results[0].formatted_address;
      } else {
        this.infoWindowContent = 'No address found';
      }
      if (this.infoWindow != undefined) {
        this.infoWindow.open(marker);
      }
    });
  }

  fetchAddress(lat: number, lng: number) {
    const url = `${this.geocodingUrl}?latlng=${lat},${lng}&key=AIzaSyAWPPT1JgQDM1VKmtsJP1BllOct13eSD2I`;
    return this.http.get(url);
  }
}
