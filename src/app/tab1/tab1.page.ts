import { Component } from '@angular/core';
declare var cordova: any;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  ngOnInit(): void {
    cordova.plugins.BaiduMobStatistics.onPageStart('Tab1Page');
  }

  to(con) {
    cordova.plugins.BaiduMobStatistics.onEvent('event1', con);
  }
  
  ionViewWillLeave () {
    cordova.plugins.BaiduMobStatistics.onPageEnd('tab1onPageEnd');
  }
}
