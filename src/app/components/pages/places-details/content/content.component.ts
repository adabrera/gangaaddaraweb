import { Component } from '@angular/core';
import { PlacesHelperService } from '../../../services/places-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends PlacesHelperService {

}
