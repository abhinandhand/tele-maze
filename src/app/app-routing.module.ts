import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ErrorNotFoundComponent } from './shared/components/error/404/404.component';
import { TeleMazeRoutes } from './shared/shared.enum';

const routes: Routes = [
  {path: TeleMazeRoutes.Dashboard, loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: TeleMazeRoutes.Detail, loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)},
  {path: TeleMazeRoutes.Search, loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule)},
  {path: TeleMazeRoutes.ErrorNotFound, component: ErrorNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
