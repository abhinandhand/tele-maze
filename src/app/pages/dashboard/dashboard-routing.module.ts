import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowGalleryComponent } from './components/show-gallery/show-gallery.component';

const routes: Routes = [
  {path:'', component: ShowGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
