import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard} from '../../guards/admin.guard';
import { AboutUsabivalidComponent } from './about-usabivalid.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsabivalidComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AboutUsabivalidRoutingModule {
}

