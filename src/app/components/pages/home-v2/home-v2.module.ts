import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeV2RoutingModule } from './home-v2-routing.module';
import { HomeV2Component } from './home-v2.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { CoreFeaturesComponent } from './core-features/core-features.component';
import { FeatureRoomComponent } from './feature-room/feature-room.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { VideoWrapComponent } from './video-wrap/video-wrap.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { InstagramComponent } from './instagram/instagram.component';


@NgModule({
  declarations: [HomeV2Component, BannerComponent, TextBlockComponent, CoreFeaturesComponent, FeatureRoomComponent, TestimonialsComponent, VideoWrapComponent, BlogPostComponent, InstagramComponent],
  imports: [
    CommonModule,
    HomeV2RoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule
  ]
})
export class HomeV2Module { }
