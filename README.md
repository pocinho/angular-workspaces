# angular-workspaces
How to structure and route libraries in Angular applications by example.

# Angular Workspaces

Paulo Pocinho, 2019-11-26

The following notes show how to structure and route libraries in Angular applications by example.

## Basics

### Create a workspace

```powershell
mkdir c:\dev

cd c:\dev

ng new apphub-workspace --createApplication=false
```

### Create a main application

```powershell
cd c:\dev\apphub-workspace

ng generate application apphub-app-home --routing --style=scss
```

### Create libraries

```powershell
cd c:\dev\apphub-workspace

ng generate library apphub-lib-blog
ng generate library apphub-lib-welcome
```

## Setting up the application

The application and the two libraries were created. They can be found inside the workspace folder named projects.

```powershell
C:\dev\apphub-workspace\projects\apphub-app-home
C:\dev\apphub-workspace\projects\apphub-lib-blog
C:\dev\apphub-workspace\projects\apphub-lib-welcome
```

### Let's add some components to our libs

```powershell
cd c:\dev\apphub-workspace

ng generate component blog-page1 --project=apphub-lib-blog --style=scss
ng generate component blog-page2 --project=apphub-lib-blog --style=scss
```

We will need some form of navigation, between page 1 and page 2.

Let's add a navigation component for blog lib.

```powershell
cd c:\dev\apphub-workspace

ng generate component nav --project=apphub-lib-blog --style=scss
```

The nav.component.html file that was just created at the following location.

```powershell
C:\dev\apphub-workspace\projects\apphub-lib-blog\src\lib\nav\nav.component.html
```

Replace the contents of nav.component.html with the following.

```html
<a routerLink='/blog/page1'> Page 1 </a> |
<a routerLink='/blog/page2'> Page 2 </a>
```

Add the nav component to the first line in blog-page1.component.html:

```html
<lib-nav></lib-nav>
<p>blog-page1 works!</p>
```

Do the same for blog-page2.component.html:

```html
<lib-nav></lib-nav>
<p>blog-page2 works!</p>
```

Now we go through the same steps for welcome lib.

```powershell
cd c:\dev\apphub-workspace

ng generate component welcome-page1 --project=apphub-lib-welcome --style=scss
ng generate component welcome-page2 --project=apphub-lib-welcome --style=scss
ng generate component nav --project=apphub-lib-welcome --style=scss
```

The nav.component.html file that was just created at the following location.

```powershell
C:\dev\apphub-workspace\projects\apphub-lib-welcome\src\lib\nav\nav.component.html
```

Replace the contents of nav.component.html with the following.

```html
<a routerLink='/welcome/page1'> Page 1 </a> |
<a routerLink='/welcome/page2'> Page 2 </a>
```

Add the nav component to the first line in welcome-page1.component.html:

```html
<lib-nav></lib-nav>
<p>welcome-page1 works!</p>
```

Do the same for welcome-page2.component.html:

```html
<lib-nav></lib-nav>
<p>welcome-page2 works!</p>
```

## Adding Routes

We need a routing module to be able to use our previous nav component.

```powershell
cd c:\dev\apphub-workspace

ng generate module apphub-lib-blog-routing --project=apphub-lib-blog --flat=true
```

The router module was created at the following directory.

```powershell
C:\dev\apphub-workspace\projects\apphub-lib-blog\src\lib\apphub-lib-blog-routing.module.ts
```

Edit the file apphub-lib-blog-routing.module.ts with the following contents.

```typescript
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
```

Now do the same procedure for welcome lib.

```powershell
cd c:\dev\apphub-workspace

ng generate module apphub-lib-welcome-routing --project=apphub-lib-welcome --flat=true
```

The router module was created at the following directory.

```powershell
C:\dev\apphub-workspace\projects\apphub-lib-welcome\src\lib\apphub-lib-welcome-routing.module.ts
```

Edit the file apphub-lib-welcome-routing.module.ts with the following contents.

```typescript
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
```

We have to tell the library modules how to use our route modules. We have to import them.

Setup apphub-lib-blog.module.ts like so.

```typescript
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
```

Then, for the welcome lib, setup apphub-lib-welcome.module.ts like this.

```typescript
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
```

We are done setting up routing for the libraries. Now we need to link the libraries with the main application.

## Using libraries in the main app

First, we want to be able to navigate between blog and welcome. We can create a nav component in the main application.

```powershell
cd c:\dev\apphub-workspace

ng generate component nav --project=apphub-app-home --style=scss
```

Replace the contents of nav.component.html with the following.

```html
<a routerLink="/blog" >Blog</a> |
<a routerLink="/welcome" >Welcome</a>
```

Replace the contents of app.component.html with the following.

```html
<div>
  <app-nav></app-nav>
</div>
<router-outlet></router-outlet>
```

Alright. We need some routing for the application. We can setup app-routing.module.ts like this.

```typescript
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
```

The lib projects are being used through the public api. In case we wanted to use them, just import them like so, in app.module.ts:

```typescript
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
```

## Ready to launch

We just need to launch our server and play with the links.

```powershell
cd c:\dev\apphub-workspace

ng serve --open
```

## Documentation and reading materials

### Angular

- [Workspace and project file structure](https://angular.io/guide/file-structure)

- [Creating Libraries](https://angular.io/guide/creating-libraries)

- [CLI ng generate](https://angular.io/cli/generate#application-command)

These notes were created for my personal use. I was inspired by the following post, by Jeffry Houser. The principles are the same, yet he takes a slightly diferent approach.

- [Combining Multiple Angular Applications into a Single One](https://medium.com/disney-streaming/combining-multiple-angular-applications-into-a-single-one-e87d530d6527)
