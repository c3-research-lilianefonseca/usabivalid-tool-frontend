import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbAccordionModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { AboutUsabivalidRoutingModule } from './about-usabivalid-routing.module';
import { AboutUsabivalidComponent } from './about-usabivalid.component';



@NgModule({
  declarations: [
    AboutUsabivalidComponent,
  ],
  imports: [
    AboutUsabivalidRoutingModule,
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbAccordionModule,
  ],
})

export class AboutUsabivalidModule { }
