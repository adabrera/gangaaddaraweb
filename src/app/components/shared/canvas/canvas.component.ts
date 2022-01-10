import { Component, OnInit } from '@angular/core';
import data from '../../data/navigation.json';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  public navigation = data;
  constructor() { }

  ngOnInit(): void {
  }

}
