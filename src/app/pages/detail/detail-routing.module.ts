import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';

const routes: Routes = [
    {path:'', component: ShowDetailComponent},
    {path:':id', component: ShowDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
