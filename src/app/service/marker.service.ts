import { Injectable, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  
  constructor() { }

  openInfoWindow(marker: MapMarker, position:any) {
    console.log(marker)
    console.log(position)
   
  }

}
