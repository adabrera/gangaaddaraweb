import { Component } from '@angular/core';
import { RoomHelperService } from '../../../services/room-helper.service'

@Component({
  selector: 'app-feature-room',
  templateUrl: './feature-room.component.html',
  styleUrls: ['./feature-room.component.css']
})
export class FeatureRoomComponent extends RoomHelperService {

  settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow:
      '.feature-room-arrow .prev-arrow',
    nextArrow:
      '.feature-room-arrow .next-arrow',
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
    ],
  };

}
