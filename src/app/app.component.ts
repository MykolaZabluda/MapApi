import { Component } from '@angular/core';
import { Marker } from '@agm/core';
import { MouseEvent } from '@agm/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  lat = 49.232834;
  lng = 28.469158;
  zoom = 5;

   markers: marker[] = [
      {
         lat: 49.232834,
         lng: 28.469158,
         name: 'town',
         id: 1
      },
      {
         lat: 49.224555,
         lng: 28.419033,
         name: 'cinema1',
         id: 2
      },
      {
         lat: 49.233295,
         lng: 28.465603,
         name: 'library',
         id: 3
      },
      {
         lat: 49.239429,
         lng: 28.510384,
         name: 'train_station',
         id: 4
      },
      {
         lat: 49.233672,
         lng: 28.411643,
         name: 'university',
         id: 5
      },
      {
         lat: 49.233637,
         lng: 28.466240,
         name: 'cinema2',
         id: 6
      },
   ];

   public selectedMarker: marker = this.markers[0];

   onChange(value){
      console.log(value.name);
      this.selectedMarker = value;
   }
}

// tslint:disable-next-line: class-name
interface marker {
   lat: number;
   lng: number;
   name: string;
   id: number;
}


