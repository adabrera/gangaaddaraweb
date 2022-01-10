import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogStandardComponent } from './blog-standard.component';

const routes: Routes = [{ path: '', component: BlogStandardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogStandardRoutingModule { }
