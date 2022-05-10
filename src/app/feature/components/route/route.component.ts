import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouteService } from './route.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit, OnDestroy {
  canActivate: boolean = false;
  canDeactivate: boolean = true;
  canActivateChild: boolean = true;
  canLoad: boolean = true;

  canActivateSubscription!: Subscription;
  canDeactivateSubscription!: Subscription;
  canActivateChildSubscription!: Subscription;
  canLoadSubscription!: Subscription;

  constructor(private routeService: RouteService) {}

  ngOnInit(): void {
    this.canActivateSubscription = this.routeService.canActivate$.subscribe((value) => {
      this.canActivate = value;
    })

    this.canDeactivateSubscription = this.routeService.canDeactivate$.subscribe((value) => {
      this.canDeactivate = value;
    })

    this.canActivateChildSubscription = this.routeService.canActivateChild$.subscribe((value) => {
      this.canActivateChild = value;
    })

    this.canLoadSubscription = this.routeService.canLoad$.subscribe((value) => {
      this.canLoad = value;
    })
  }

  ngOnDestroy(): void {
    this.canActivateSubscription.unsubscribe();
    this.canDeactivateSubscription.unsubscribe();
    this.canActivateChildSubscription.unsubscribe();
    this.canLoadSubscription.unsubscribe();
  }

  canActivateChange(value: boolean) {
    this.routeService.canActivate$.next(value);
  }

  canDeactivateChange(value: boolean) {
    this.routeService.canDeactivate$.next(value);
  }

  canActivateChildChange(value: boolean) {
    this.routeService.canActivateChild$.next(value);
  }

  canLoadChange(value: boolean) {
    this.routeService.canLoad$.next(value);
  }
}
