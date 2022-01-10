import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomGridComponent } from './room-grid.component';

const routes: Routes = [{ path: '', component: RoomGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomGridRoutingModule { }
