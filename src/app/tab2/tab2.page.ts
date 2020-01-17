import { Component } from '@angular/core';
declare var cordova: any;
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }

  ngOnInit(): void {
    cordova.plugins.BaiduMobStatistics.onPageStart('Tab2Page');
  }

  totest(type) {
    switch (type) {
      case 1:
        cordova.plugins.BaiduMobStatistics.onEvent('event1', '事件一');
        console.log('event1', '事件一');
        break;
      case 12:
        cordova.plugins.BaiduMobStatistics.onEventDuration('event2', '事件二', 1000);
        console.log('event1', '事件一');
        break;
      case 13:
        cordova.plugins.BaiduMobStatistics.onEventStart('event3', '事件三');
        break;
      case 14:
        cordova.plugins.BaiduMobStatistics.onEventWithAttributes('event4', '事件四', { 分类: '分类一' });
        break;
      default:
        break;
    }
  }

  totest2() {
    alert(cordova.plugins.BaiduMobStatistics);
  }

  ionViewWillLeave () {
    cordova.plugins.BaiduMobStatistics.onPageEnd('Tab2Page');
  }
}
