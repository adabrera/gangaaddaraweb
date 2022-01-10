import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { RoomDetailsRoutingModule } from './room-details-routing.module';
import { RoomDetailsComponent } from './room-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RoomDetailsComponent, ContentComponent],
  imports: [
    CommonModule,
    RoomDetailsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnd9JwZvXty-1gHZihMoFhJtCXmHfeRQg'
    })
  ]
})
export class RoomDetailsModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}