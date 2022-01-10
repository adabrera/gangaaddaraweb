import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgMasonryGridModule } from 'ng-masonry-grid';

import { HomeV3RoutingModule } from './home-v3-routing.module';
import { HomeV3Component } from './home-v3.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { RoomSliderComponent } from './room-slider/room-slider.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { CoreFeatureComponent } from './core-feature/core-feature.component';
import { MenuAreaComponent } from './menu-area/menu-area.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
 

@NgModule({
  declarations: [HomeV3Component, BannerComponent, AboutTextComponent, RoomSliderComponent, TextBlockComponent, CoreFeatureComponent, MenuAreaComponent, BlogPostComponent],
  imports: [
    CommonModule,
    HomeV3RoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    NgMasonryGridModule
  ]
})
export class HomeV3Module { }
