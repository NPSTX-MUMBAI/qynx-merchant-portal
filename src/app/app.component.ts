import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import tinycolor from 'tinycolor2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'qynx-merchant-portal';

  data = {
    bttonColor: 'red',
    headerColor: 'blue',
    sideMenu: 'grren',
  };

  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private nzConfigService: NzConfigService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // jsonStyle = {
  //   sidemenuColor: '#ffffff',
  //   navHeaderColor: '#1A55E3',
  //   backgroundColor: '#F5F7F8',
  //   borderColor: '#d9d9d9',
  //   buttonColor: '#1A55E3',
  //   textColor: '#ffffff',
  //   errorColor: 'red',
  // };

  jsonStyle = {
    primaryColor: '#48CFCB',
    navHeaderColor: '#424242',
    sidemenuColor: '#ffffff',
    sidemenuTextColor: '#ffffff',
  };

  ngOnInit(): void {
    if (this.isBrowser) {
      document.documentElement.style.setProperty(
        '--npst_sidemenu_color',
        this.jsonStyle.sidemenuColor
      );
      document.documentElement.style.setProperty(
        '--npst_header_color',
        this.jsonStyle.navHeaderColor
      );
      document.documentElement.style.setProperty(
        '--npst_text_color',
        this.jsonStyle.sidemenuTextColor
      );

      const shades = this.generateColorShades(this.jsonStyle.primaryColor);

      Object.keys(shades).forEach((shadeKey) => {
        document.documentElement.style.setProperty(shadeKey, shades[shadeKey]);
      });
    }
  }

  generateColorShades(primaryColor: string): any {
    const color = tinycolor(primaryColor);

    return {
      '--primary-color': primaryColor,
      '--primary-color-hover': color.lighten(10).toString(),
      '--primary-color-active': color.darken(10).toString(),
      '--primary-color-outline': color.setAlpha(0.2).toString(),
      '--primary-1': color.darken(20).toString(),
      '--primary-2': color.darken(15).toString(),
      '--primary-3': color.darken(10).toString(),
      '--primary-4': color.darken(5).toString(),
      '--primary-5': color.lighten(5).toString(),
      '--primary-6': color.lighten(10).toString(),
      '--primary-7': color.lighten(20).toString(),
    };
  }
}
