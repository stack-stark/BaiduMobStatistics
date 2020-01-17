import { Component } from '@angular/core';
declare var cordova: any;
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  ngOnInit(): void {
    cordova.plugins.BaiduMobStatistics.onPageStart('Tab3Page');
  }

  ionViewWillLeave() {
    cordova.plugins.BaiduMobStatistics.onPageEnd('Tab3Page');
  }
}
