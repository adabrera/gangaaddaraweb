import { Component } from '@angular/core';
import { RoomHelperService } from '../../../services/room-helper.service'

@Component({
  selector: 'app-room-slider',
  templateUrl: './room-slider.component.html',
  styleUrls: ['./room-slider.component.css']
})
export class RoomSliderComponent extends RoomHelperService {
  settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    centerMode: true,
    asNavFor: ".room-content-slider",
    centerPadding: '6%',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: '15%',
        },
      },
    ]
  };
  settingsThumb = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    asNavFor: ".rooms-slider-one",
  };
}
