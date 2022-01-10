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
      tag: 'The ultimate luxury experience',
      title: "The Perfect <br/> Base For You",
    },
    {
      img: "assets/img/banner/welcomeImage_2.jpg",
      tag: 'The ultimate luxury experience',
      title: 'The Perfect <br/> Base For You',
    },
    {
      img: "assets/img/banner/welcomeImage_3.JPG",
      tag: 'The ultimate luxury experience',
      title: 'The Perfect <br/> Base For You',
    },
    {
      img: "assets/img/banner/welcomeImage_4.JPG",
      tag: 'The ultimate luxury experience',
      title: 'The Perfect <br/> Base For You',
    },
    {
      img: "assets/img/banner/welcomeImage_5.JPG",
      tag: 'The ultimate luxury experience',
      title: 'The Perfect <br/> Base For You',
    },
  ];
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
  };

  ngOnInit(): void {
  }

}
