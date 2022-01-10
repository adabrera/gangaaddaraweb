import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutTextComponent } from './about-text/about-text.component';
import { CoreFeatureComponent } from './core-feature/core-feature.component';
import { CounterTwoComponent } from './counter-two/counter-two.component';
import { BlogPostComponent } from './blog-post/blog-post.component';


@NgModule({
  declarations: [AboutComponent, AboutTextComponent, CoreFeatureComponent, CounterTwoComponent, BlogPostComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class AboutModule { }
