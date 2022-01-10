import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageRoutingModule } from './error-page-routing.module';
import { ErrorPageComponent } from './error-page.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    CommonModule,
    ErrorPageRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ErrorPageModule { }
