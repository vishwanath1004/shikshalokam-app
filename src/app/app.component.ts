import { Component, ViewChild } from '@angular/core';
import { Platform, NavController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import 'rxjs/add/operator/debounceTime';
//import {Deeplinks} from '@ionic-native/deeplinks';
import {AboutPage} from './about/about.page'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild(NavController) nav:NavController;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle'
    }
  ];

  public isConnected;
  public loggedInUser;
  constructor(
    private router:Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#af4038');
      this.splashScreen.hide();
      // Deeplinks.routeWithNavController(this.nav,{
      //   '/projects': ProjectsPage,
      //   '/about': AboutPage
      // }).subscribe(match => {
      //   let path = JSON.stringify(match.$link.path);
      //   // alert('Successfully matched route'+ path);
      //   this.router.navigateByUrl(path);
      // }, nomatch => {
      //   // console.error('Got a deeplink that didn\'t match', nomatch);
      // });
    });
  }
}
