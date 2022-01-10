import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../../services/helper.service';
import gallery from '../../../data/gallery.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends HelperService implements OnInit {
  public gallery = gallery;
  constructor(public HelperService: HelperService) {
    super()
  }

  ngOnInit(): void {
  }

}
