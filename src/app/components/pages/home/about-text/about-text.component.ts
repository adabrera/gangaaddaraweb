import { Component, OnInit } from '@angular/core';
import category from '../../../data/category.json';

@Component({
  selector: 'app-about-text',
  templateUrl: './about-text.component.html',
  styleUrls: ['./about-text.component.css']
})
export class AboutTextComponent implements OnInit {
  public category = category;
  constructor() { }

  ngOnInit(): void {
  }

}
