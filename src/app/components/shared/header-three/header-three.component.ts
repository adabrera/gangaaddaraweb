import { Component } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import data from '../../data/navigation.json';

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.css']
})
export class HeaderThreeComponent extends HelperService {
  public navigation = data;
  constructor(public helperService: HelperService) {
    super();
  }
}
