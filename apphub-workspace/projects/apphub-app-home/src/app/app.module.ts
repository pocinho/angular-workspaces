import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ApphubLibBlogModule } from 'projects/apphub-lib-blog/src/public-api';
import { ApphubLibWelcomeModule } from 'projects/apphub-lib-welcome/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApphubLibBlogModule,
    ApphubLibWelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
