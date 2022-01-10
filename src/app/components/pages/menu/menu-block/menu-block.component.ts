import { Component, OnInit } from '@angular/core';
import menublock from '../../../data/menu.json';
import gallery from '../../../data/menugallery.json';

@Component({
  selector: 'app-menu-block',
  templateUrl: './menu-block.component.html',
  styleUrls: ['./menu-block.component.css']
})
export class MenuBlockComponent implements OnInit {

  public menublock = menublock;
  public gallery = gallery;
  constructor() { 
    this.menuslidepost = [];
  }
  public menuslidepost: any[];
  splitArr(arr: string | any[], size: number) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  };
  ngOnInit(): void {
    this.menuslidepost = this.splitArr(this.menublock, 5);
  }
  gallerySettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };

}
