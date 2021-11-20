import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ShowGalleryComponent } from './pages/dashboard/components/show-gallery/show-gallery.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ShowDetailComponent } from './pages/detail/components/show-detail/show-detail.component';
import { DetailModule } from './pages/detail/detail.module';
import { ResultsComponent } from './pages/search/components/results/results.component';
import { SearchModule } from './pages/search/search.module';
import { ErrorNotFoundComponent } from './shared/components/error/404/404.component';
import { TeleMazeRoutes } from './shared/shared.enum';

// const routes: Routes = [
//   {path: TeleMazeRoutes.Dashboard, component: ShowGalleryComponent},
//   {path: '', redirectTo: TeleMazeRoutes.Dashboard, pathMatch:'full'},
//   {path: `${TeleMazeRoutes.Detail}/:id`, component: ShowDetailComponent},
//   {path: TeleMazeRoutes.Search, component: ResultsComponent},
//   {path: TeleMazeRoutes.ErrorNotFound, component: ErrorNotFoundComponent}
// ];

const routes: Routes = [
  {path: TeleMazeRoutes.Dashboard, loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: '', redirectTo: TeleMazeRoutes.Dashboard, pathMatch:'full'},
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
