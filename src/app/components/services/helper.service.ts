import { AfterViewInit, OnInit, HostListener, Injectable } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup';

@Injectable({
  providedIn: 'root'
})
export class HelperService implements OnInit, AfterViewInit {
  constructor() { }
  // Sticky Nav
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(_e: any) {
    if (window.pageYOffset > 100) {
      let element = <HTMLElement>document.getElementById('can-sticky');
      element.classList.add('sticky-active');
    } else {
      let element = <HTMLElement>document.getElementById('can-sticky');
      element.classList.remove('sticky-active');
    }
  }
  // Navigation
  navmethod: boolean = true;
  toggleNav() {
    this.navmethod = !this.navmethod;
  }
  // Mobile 
  open: boolean = false;
  trigger(item: { open: boolean; }) {
    item.open = !item.open;
  }
  // Sidebar
  canvasmethod: boolean = true;
  canvasToggle() {
    this.canvasmethod = !this.canvasmethod;
  }
  // Search
  searchmethod: boolean = true;
  searchToggle() {
    this.searchmethod = !this.searchmethod;
  }
  // Add class on resize and onload window
  visible: boolean = false;
  breakpoint: number = 991;
  public innerWidth: any;
  detectHeader() {
    this.innerWidth = window.innerWidth;
    this.visible = this.innerWidth >= this.breakpoint;
  }
  ngOnInit(): void {
    this.detectHeader();
  }
  ngAfterViewInit(): void {
    ($('.popup-video') as any).magnificPopup({
      type: 'iframe'
    });
    ($('.gallery-loop .popup-image') as any).magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
      mainClass: 'mfp-fade',
    });
  }
}
