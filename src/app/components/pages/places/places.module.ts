import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from './places.component';
import { SharedModule } from '../../shared/shared.module';
import { PlacesMapComponent } from './places-map/places-map.component';
import { PlacesBoxComponent } from './places-box/places-box.component';


@NgModule({
  declarations: [PlacesComponent, PlacesMapComponent, PlacesBoxComponent],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    SharedModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnd9JwZvXty-1gHZihMoFhJtCXmHfeRQg'
    })
  ]
})
export class PlacesModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}