import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapPolygon } from '@angular/google-maps';

interface LatLngLiteral {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-polygon',
  standalone: true,
  imports: [CommonModule,GoogleMapsModule],
  templateUrl: './polygon.component.html',
  styleUrl: './polygon.component.css'
})
export class PolygonComponent {

  polygonOptions:google.maps.PolygonOptions={
    strokeColor:"#FF0000",
    strokeOpacity:0.8,
    strokeWeight:2,
    fillColor:'#FF0000',
    fillOpacity:0.35
  }

  center: LatLngLiteral = { lat: 0, lng: 0 };
  zoom = 3;
  polygons: google.maps.LatLngLiteral[][] = [];
  drawingManager: google.maps.drawing.DrawingManager | undefined;

  mapOptions: google.maps.MapOptions = {
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false
  };

  onMapReady(map:any) {

    const googleMap = map.googleMap;
    
    if (!googleMap) {
      console.error('Google Map is not available');
      return;
    }
    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.POLYGON
        ]
      },
      polygonOptions: {
        editable: true,
        draggable: true
      }
      
    });
    this.drawingManager.setMap(googleMap);
    google.maps.event.addListener(this.drawingManager, 'polygoncomplete', (polygon: google.maps.Polygon) => {
      const paths = polygon.getPaths().getArray();
      const vertices: google.maps.LatLngLiteral[] = paths[0].getArray().map(coord => ({
        lat: coord.lat(),
        lng: coord.lng()
      }));
      this.polygons.push(vertices);
    });
  }
}
