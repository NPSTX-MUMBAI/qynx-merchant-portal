import { Component, Inject, OnInit } from '@angular/core';
import { Menu } from '../shared/utils/menu';
import { NpstImage } from '../shared/utils/images';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  jsonData: any = Menu.routerlink.admin;
  appLogo = NpstImage.qynxLogo;
  npstTlogo = NpstImage.appLogo;

  constructor(
    private route: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  data = {
    bttonColor: 'red',
    headerColor: 'blue',
    sideMenu: 'grren',
  };
  ngOnInit(): void {}

  onLogout() {
    this.route.navigate(['/auth/login']);
  }

  routeIsActive(routPath: string): boolean {
    console.log('SUDEEEESH ', routPath);
    return true;
  }
}
