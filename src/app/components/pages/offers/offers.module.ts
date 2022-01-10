import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { SharedModule } from '../../shared/shared.module';
import { FeatureRoomComponent } from './feature-room/feature-room.component';
import { OfferBoxComponent } from './offer-box/offer-box.component';


@NgModule({
  declarations: [OffersComponent, FeatureRoomComponent, OfferBoxComponent],
  imports: [
    CommonModule,
    OffersRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class OffersModule { }
