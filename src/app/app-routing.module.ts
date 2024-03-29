import {ExtraOptions, PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {AdminGuard} from './guards/admin.guard';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
    canActivate: [AdminGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./@core/auth')
      .then(m => m.AuthModule),
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

// const config: ExtraOptions = {
//   useHash: false,
// };

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: false, })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}