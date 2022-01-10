import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../../shared/shared.module';
import { MenuBlockComponent } from './menu-block/menu-block.component';
import { RoomGalleryComponent } from './room-gallery/room-gallery.component';


@NgModule({
  declarations: [MenuComponent, MenuBlockComponent, RoomGalleryComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule
  ]
})
export class MenuModule { }
