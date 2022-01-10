import { Component } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import data from '../../data/navigation.json';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
export class HeaderTwoComponent extends HelperService {
  public navigation = data;
  constructor(public helperService: HelperService) {
    super();
  }
}
