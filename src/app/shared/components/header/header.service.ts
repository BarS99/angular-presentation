import { Injectable } from '@angular/core';
import { HeaderLinksInterace } from './header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerLinks: HeaderLinksInterace[] = [
    {
      text: "Main page",
      path: "",
    },
    {
      text: "Angular routing",
      path: "route",
    },
    {
      text: "Animations",
      path: "animations",
    },
  ];

  constructor() { }

  getHeaderLinks() {
    return this.headerLinks;
  }
}
