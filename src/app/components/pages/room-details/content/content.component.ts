import { Component, OnInit } from '@angular/core';
import { RoomHelperService } from '../../../services/room-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent extends RoomHelperService implements OnInit {
 
  ngOnInit(): void {
    // this.galleryOptions = [
    //   {
    //     width: '600px',
    //     height: '400px',
    //     thumbnailsColumns: 4,
    //     imageAnimation: NgxGalleryAnimation.Slide,
    //   },
    //   // max-width 800
    //   {     
    //     breakpoint: 800,
    //     width: '100%',
    //     height: '600px',
    //     imagePercent: 80,
    //     thumbnailsPercent: 20,
    //     thumbnailsMargin: 20,
    //     thumbnailMargin: 20,
    //   },
    //   // max-width 400
    //   {
    //     breakpoint: 400,
    //     preview: false,
    //   },
    // ];

    // this.galleryImages = [
    //   {
    //     small: 'assets/img/gallery/1-small.jpeg',
    //     medium: 'assets/img/gallery/1-medium.jpeg',
    //     big: 'assets/img/gallery/1-big.jpeg'
    //   }
    // ];

  
    // this.roomdetails.detailPictures.forEach((element: string) => {
    //   this.galleryImages.push({
    //     small: element,
    //     medium: element,
    //     big: element,
    //   });
    // });
    
  }

  zoom: number = 12;
  lat: number = 31.53912;
  lng: number = -89.29163;
}
