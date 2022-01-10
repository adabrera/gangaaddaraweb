import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesDetailsComponent } from './places-details.component';

const routes: Routes = [{ path: '', component: PlacesDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesDetailsRoutingModule { }
