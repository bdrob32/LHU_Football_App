import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', //used to be loader
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'roster',
    loadChildren: () => import('./pages/roster/roster.module').then( m => m.RosterPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  
  {
    path: 'scores',
    loadChildren: () => import('./pages/scores/scores.module').then( m => m.ScoresPageModule)
  },
  {
    path: 'outcome',
    loadChildren: () => import('./pages/outcome/outcome.module').then( m => m.OutcomePageModule)
  },
  {
    path: 'webscraper',
    loadChildren: () => import('./pages/webscraper/webscraper.module').then( m => m.WebscraperPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
