import {Component, OnInit} from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router } from '@angular/router';

import {BingApiLoaderService} from './_services/bing-api-loader.service';
import {SidebarService} from './_services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bioseer-Web-Interface';
  mapLoaded = false;

  absolute: boolean;

  constructor(
    private bingApiLoader: BingApiLoaderService,
    private _loadingBar: SlimLoadingBarService,
    public sidebarservice: SidebarService,
    private _router: Router) {
    this.bingApiLoader.load().then(() => {
      this.mapLoaded = true;
    });
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
    this._router.events.subscribe(res => {
      this._router.url === '/' ? this.absolute = true : this.absolute = false;
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
}
