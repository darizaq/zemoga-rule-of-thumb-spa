import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '@environments/environment';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: '404',
    loadChildren: () => import('./features/not-found/not-found.module').then((m) => m.NotFoundModule)
  },
  {
    path: '**',
    loadChildren: () => import('./features/not-found/not-found.module').then((m) => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.useHashRoutes })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
