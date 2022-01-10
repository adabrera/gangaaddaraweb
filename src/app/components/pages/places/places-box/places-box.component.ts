import { Component } from '@angular/core';
import { PlacesHelperService } from '../../../services/places-helper.service';

@Component({
  selector: 'app-places-box',
  templateUrl: './places-box.component.html',
  styleUrls: ['./places-box.component.css']
})
export class PlacesBoxComponent extends PlacesHelperService {

}
