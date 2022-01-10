import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places-map',
  templateUrl: './places-map.component.html',
  styleUrls: ['./places-map.component.css']
})
export class PlacesMapComponent implements OnInit {

  constructor() { }
  
  zoom: number = 12;
  lat: number = 31.53912;
  lng: number = -89.29163;

  ngOnInit(): void {
  }

}
