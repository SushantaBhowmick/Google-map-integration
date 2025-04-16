import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapMarkerComponent } from "./components/map-marker/map-marker.component";
import { PolygonComponent } from "./components/polygon/polygon.component";
import { PolygonInfoWindowComponent } from "./components/polygon-info-window/polygon-info-window.component";
import { PolylineComponent } from "./components/polyline/polyline.component";
import { AdvancedMarkerComponent } from "./components/advanced-marker/advanced-marker.component";
import { SelectDropdownComponent } from "./components/select-dropdown/select-dropdown.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapMarkerComponent, PolygonComponent, PolygonInfoWindowComponent, PolylineComponent, AdvancedMarkerComponent, SelectDropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'google-maps';
}
