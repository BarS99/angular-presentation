import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  canActivate$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  canDeactivate$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  canActivateChild$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  canLoad$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }
}
