import { Component } from '@angular/core';
import { BlogHelperService } from '../../../services/blog-helper.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent extends BlogHelperService {
  settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow:
      '.latest-post-arrow .prev-arrow',
    nextArrow:
      '.latest-post-arrow .next-arrow',
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  }
}
