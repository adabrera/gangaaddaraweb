import { Component } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-block',
  templateUrl: './restaurant-block.component.html',
  styleUrls: ['./restaurant-block.component.css']
})
export class RestaurantBlockComponent extends RestaurantService {

}
