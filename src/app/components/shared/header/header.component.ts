import { Component, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import data from '../../data/navigation.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends HelperService {
  public navigation = data;
  constructor(public helperService: HelperService) {
    super();
  }
  @Input()  layout: number | string | undefined;
}
