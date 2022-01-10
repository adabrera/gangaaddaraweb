import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [GalleryComponent, ContentComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class GalleryModule { }
