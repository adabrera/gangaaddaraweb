import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerPosts = [
    {
      img: "assets/img/banner/05.jpg",
      tag: 'The ultimate luxury experience',
      title: "The Perfect <br/> Base For You",
    },
    {
      img: "assets/img/banner/06.jpg",
      tag: 'The ultimate luxury experience',
      title: 'The Perfect <br/> Base For You',
    },
  ];
  constructor() { }
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
