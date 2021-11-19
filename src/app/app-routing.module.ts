import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorNotFoundComponent } from './shared/components/error/404/404.component';

const routes: Routes = [
  {path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'detail', loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)},
  {path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule)},
  {path: 'error-not-found', component: ErrorNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
