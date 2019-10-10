import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	theNation: string = 'http://thenationonlineng.net/category/health';
	leadership: string = 'https://leadership.ng/category/news/health';
	tribune: string = 'https://www.tribuneonlineng.com/health';
	dailyTimes: string = 'https://dailytimes.ng/category/health';
	nationalMirror: string = 'https://www.nationalmirroronline.net/health';
  constructor(private inappbrowser: InAppBrowser) {

  }

  openTheNation(){
  	const options: InAppBrowserOptions = {
  		zoom: 'no'
  	}

  	this.inappbrowser.create(this.theNation, '_self', options);
  }

  openTheLeadership(){
  	const options: InAppBrowserOptions = {
  		zoom: 'no'
  	}

  	this.inappbrowser.create(this.leadership, '_self', options);
  }

  openTribune(){
  	const options: InAppBrowserOptions = {
  		zoom: 'no'
  	}

  	this.inappbrowser.create(this.tribune, '_self', options);
  }

  openDailyTimes(){
  	const options: InAppBrowserOptions = {
  		zoom: 'no'
  	}

  	this.inappbrowser.create(this.dailyTimes, '_self', options);
  }

  openNationalMirror(){
  	const options: InAppBrowserOptions = {
  		zoom: 'no'
  	}

  	this.inappbrowser.create(this.nationalMirror, '_self', options);
  }


}
 	