import { Component } from '@angular/core';
import { RoomHelperService } from '../../../services/room-helper.service'

@Component({
  selector: 'app-room-slider',
  templateUrl: './room-slider.component.html',
  styleUrls: ['./room-slider.component.css']
})
export class RoomSliderComponent extends RoomHelperService  {

  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '28%',
    prevArrow:
      '<div class="slick-arrow prev-arrow"><i class="fal fa-arrow-left"></i></div>',
    nextArrow:
      '<div class="slick-arrow next-arrow"><i class="fal fa-arrow-right"></i></div>',
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                centerPadding: '20%',
            },
        },
        {
            breakpoint: 992,
            settings: {
                centerPadding: '15%',
            },
        },
        {
            breakpoint: 768,
            settings: {
                centerPadding: '10%',
            },
        },
        {
            breakpoint: 576,
            settings: {
                centerPadding: '5%',
            },
        },
    ]
};
}
