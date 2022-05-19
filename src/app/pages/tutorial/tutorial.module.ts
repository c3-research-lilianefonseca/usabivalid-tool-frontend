import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbAccordionModule, NbCheckboxModule, NbIconModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { TutorialRoutingModule } from './tutorial-routing.mdule';
import { TutorialComponent } from './tutorial.component';



@NgModule({
  declarations: [
    TutorialComponent
  ],
  imports: [
    TutorialRoutingModule,
    CommonModule,
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbAccordionModule,
    NbCheckboxModule,
    NbIconModule,
  ]
})
export class TutorialModule { }

