import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { RoomListRoutingModule } from './room-list-routing.module';
import { RoomListComponent } from './room-list.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [RoomListComponent, ContentComponent],
  imports: [
    CommonModule,
    RoomListRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
  ]
})
export class RoomListModule { }
