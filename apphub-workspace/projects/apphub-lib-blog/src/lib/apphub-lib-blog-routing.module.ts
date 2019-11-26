import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPage1Component } from './blog-page1/blog-page1.component';
import { BlogPage2Component } from './blog-page2/blog-page2.component';

const routes: Routes = [
  { path: 'blog/page1', component: BlogPage1Component },
  { path: 'blog/page2', component: BlogPage2Component },
  { path: 'blog', redirectTo: '/blog/page1' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApphubLibBlogRoutingModule { }
