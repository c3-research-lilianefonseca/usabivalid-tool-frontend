import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard} from '../../guards/admin.guard';
import { TutorialComponent } from './tutorial.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialComponent,
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
export class TutorialRoutingModule {
}

