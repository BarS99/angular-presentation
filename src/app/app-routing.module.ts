import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './feature/components/animations/animations.component';
import { RouteComponent } from './feature/components/route/route.component';
import { IndexComponent } from './feature/components/index/index.component';
import { Page404Component } from './feature/components/page404/page404.component';
import { AppGuard } from './guards/app.guard';
import { RouteChildComponent } from './feature/components/route-child/route-child.component';

const routes: Routes = [
  {
    component: IndexComponent,
    path: "",
    canActivate: [AppGuard],
  },
  {
    component: AnimationsComponent,
    path: "animations",
  },
  {
    component: RouteComponent,
    path: "route",
    canDeactivate: [AppGuard],
    canActivateChild: [AppGuard],
    children: [
      {
        component: RouteChildComponent,
        path: "routeChild",
      }
    ],
  },
  {
    loadChildren: () => import('./feature/modules/welcome/welcome.module').then(m => m.WelcomeModule),
    path: "welcome",
    canLoad: [AppGuard]
  },
  {
    component: Page404Component,
    path: "**",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
