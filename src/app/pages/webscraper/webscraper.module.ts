import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebscraperPageRoutingModule } from './webscraper-routing.module';

import { WebscraperPage } from './webscraper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebscraperPageRoutingModule
  ],
  declarations: [WebscraperPage]
})
export class WebscraperPageModule {}
