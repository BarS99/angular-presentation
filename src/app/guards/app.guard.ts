import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteService } from '../feature/components/route/route.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(private routeService: RouteService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const canActivate: boolean = this.routeService.canActivate$.getValue();

    if (!canActivate) {
      alert("Sorry! \"canActivate\" switch is off, thus you can't proceed!");
    }

    return canActivate;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const canActivateChild: boolean = this.routeService.canActivateChild$.getValue();

      if (!canActivateChild) {
        alert("Sorry! \"canActivateChild\" switch is off, thus you can't load the child!");
      }

    return canActivateChild;
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const canDeactivate: boolean = this.routeService.canDeactivate$.getValue();
    
    if (!canDeactivate) {
      alert("Sorry! \"canDectivate\" switch is off, thus you can't leave the page!.");
    }

    return canDeactivate;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const canLoad: boolean = this.routeService.canLoad$.getValue();

      if (!canLoad) {
        alert("Sorry! \"canLoad\" switch is off, thus you can't leave load the module!.");
      }

    return canLoad;
  }
}
