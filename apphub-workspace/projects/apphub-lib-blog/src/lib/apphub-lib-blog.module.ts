import { NgModule } from '@angular/core';
import { ApphubLibBlogComponent } from './apphub-lib-blog.component';
import { BlogPage1Component } from './blog-page1/blog-page1.component';
import { BlogPage2Component } from './blog-page2/blog-page2.component';
import { NavComponent } from './nav/nav.component';
import { ApphubLibBlogRoutingModule } from './apphub-lib-blog-routing.module';

@NgModule({
  declarations: [ApphubLibBlogComponent, BlogPage1Component, BlogPage2Component, NavComponent],
  imports: [
    ApphubLibBlogRoutingModule
  ],
  exports: [ApphubLibBlogComponent]
})
export class ApphubLibBlogModule { }
