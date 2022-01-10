import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { SharedModule } from '../../shared/shared.module';
import { MenuAreaComponent } from './menu-area/menu-area.component';
import { RestaurantBlockComponent } from './restaurant-block/restaurant-block.component';


@NgModule({
  declarations: [RestaurantComponent, MenuAreaComponent, RestaurantBlockComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class RestaurantModule { }
