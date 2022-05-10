import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { Welcome2Component } from '../../components/welcome2/welcome2.component';

@NgModule({
  declarations: [ 
    WelcomeComponent,
    Welcome2Component
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule
  ]
})
export class WelcomeModule { 
  constructor() {}
}
