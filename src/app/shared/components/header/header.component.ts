import { Component, OnInit } from '@angular/core';
import { HeaderLinksInterace } from './header.model';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed = true;
  headerLinks: HeaderLinksInterace[] = this.headerService.getHeaderLinks();

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}
}
