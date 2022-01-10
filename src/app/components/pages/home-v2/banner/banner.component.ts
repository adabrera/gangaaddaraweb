import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  bannerPosts = [
    {
      img: "assets/img/banner/welcomeImage.jpg",
      tag: 'The ultimate Kandyan experience',
      title: "Hotel <br/> Ganga Addara",
    },
    {
      img: "assets/img/banner/welcomeImage_2.jpg",
      tag: 'The ultimate Kandyan experience',
      title: "Hotel <br/> Ganga Addara",
    },
    {
      img: "assets/img/banner/welcomeImage_3.JPG",
      tag: 'The ultimate Kandyan experience',
      title: "Hotel <br/> Ganga Addara",
    },
    {
      img: "assets/img/banner/welcomeImage_4.JPG",
      tag: 'The ultimate Kandyan experience',
      title: "Hotel <br/> Ganga Addara",
    },
    {
      img: "assets/img/banner/welcomeImage_5.JPG",
      tag: 'The ultimate Kandyan experience',
      title: "Hotel <br/> Ganga Addara",
    },
  ];
  settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    fade: true,
    arrows: false,
  };

  ngOnInit(): void {
  }

}
