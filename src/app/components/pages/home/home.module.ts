import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { RoomTypeComponent } from './room-type/room-type.component';
import { CtaComponent } from './cta/cta.component';
import { RoomSliderComponent } from './room-slider/room-slider.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { RoomGalleryComponent } from './room-gallery/room-gallery.component';
import { BlogpostComponent } from './blogpost/blogpost.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, AboutTextComponent, RoomTypeComponent, CtaComponent, RoomSliderComponent, TextBlockComponent, TestimonialsComponent, RoomGalleryComponent, BlogpostComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }
