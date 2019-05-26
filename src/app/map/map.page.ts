import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, AfterContentInit {
  map;
  @ViewChild('mapElement') mapElement;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        center: { lat: -8.060608, lng: -34.872073 },
        zoom: 16
      });
  }

}
