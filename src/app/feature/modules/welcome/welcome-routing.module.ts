import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { Welcome2Component } from '../../components/welcome2/welcome2.component';

const routes: Routes = [
  {
    component: WelcomeComponent,
    path: "",
    children: [
      {
        path: 'welcome2',
        component: Welcome2Component
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
