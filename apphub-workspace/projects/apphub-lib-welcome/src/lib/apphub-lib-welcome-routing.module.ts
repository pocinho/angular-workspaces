import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePage1Component } from './welcome-page1/welcome-page1.component';
import { WelcomePage2Component } from './welcome-page2/welcome-page2.component';

const routes: Routes = [
  { path: 'welcome/page1', component: WelcomePage1Component },
  { path: 'welcome/page2', component: WelcomePage2Component },
  { path: 'welcome', redirectTo: '/welcome/page1' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApphubLibWelcomeRoutingModule { }
