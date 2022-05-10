import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { IndexComponent } from './feature/components/index/index.component';
import { AnimationsComponent } from './feature/components/animations/animations.component';
import { RouteComponent } from './feature/components/route/route.component';
import { Page404Component } from './feature/components/page404/page404.component';
import { RouteChildComponent } from './feature/components/route-child/route-child.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AnimationsComponent,
    RouteComponent,
    Page404Component,
    RouteChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
