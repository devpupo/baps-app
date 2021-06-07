import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';

import { AboutPageRoutingModule } from './about-routing.module';
import { ToolBarModule } from '../components/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    ToolBarModule
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
