import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-v3',
  templateUrl: './home-v3.component.html',
  styleUrls: ['./home-v3.component.css']
})
export class HomeV3Component implements OnInit {

  constructor() { }
  // Footer style
  classname = "light-theme";
  ftlogo = "assets/img/logo.png"

  ngOnInit(): void {
  }

}
