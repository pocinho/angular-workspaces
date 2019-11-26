import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApphubLibBlogModule } from 'projects/apphub-lib-blog/src/public-api';
import { ApphubLibWelcomeModule } from 'projects/apphub-lib-welcome/src/public-api';

const routes: Routes = [
  { path: 'blog', component: ApphubLibBlogModule },
  { path: 'welcome', component: ApphubLibWelcomeModule },
  { path: '**', redirectTo: '/welcome/page1' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ApphubLibBlogModule,
    ApphubLibWelcomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
