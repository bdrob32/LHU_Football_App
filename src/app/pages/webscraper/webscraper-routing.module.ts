import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebscraperPage } from './webscraper.page';

const routes: Routes = [
  {
    path: '',
    component: WebscraperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebscraperPageRoutingModule {}
