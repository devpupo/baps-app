import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';

import { AboutPageRoutingModule } from './about-routing.module';
import { ToolBarComponent } from '../components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage, ToolBarComponent]
})
export class AboutPageModule {}
