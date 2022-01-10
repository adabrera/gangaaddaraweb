import { Component, OnInit } from '@angular/core';
import category from '../../../data/category.json';
import { HelperService } from '../../../services/helper.service';

@Component({
  selector: 'app-about-text',
  templateUrl: './about-text.component.html',
  styleUrls: ['./about-text.component.css']
})
export class AboutTextComponent extends HelperService implements OnInit {
  public category = category;
  constructor(public HelperService: HelperService) {
    super()
  }

  ngOnInit(): void {
  }

}
