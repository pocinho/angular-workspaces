import { NgModule } from '@angular/core';
import { ApphubLibWelcomeComponent } from './apphub-lib-welcome.component';
import { WelcomePage1Component } from './welcome-page1/welcome-page1.component';
import { WelcomePage2Component } from './welcome-page2/welcome-page2.component';
import { NavComponent } from './nav/nav.component';
import { ApphubLibWelcomeRoutingModule } from './apphub-lib-welcome-routing.module';

@NgModule({
  declarations: [ApphubLibWelcomeComponent, WelcomePage1Component, WelcomePage2Component, NavComponent],
  imports: [
    ApphubLibWelcomeRoutingModule
  ],
  exports: [ApphubLibWelcomeComponent]
})
export class ApphubLibWelcomeModule { }
