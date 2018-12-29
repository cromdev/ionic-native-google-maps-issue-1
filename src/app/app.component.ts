import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Environment} from '@ionic-native/google-maps';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			Environment.setEnv({
				'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCYSwRVfkV5GPCba4iOOnC9QrA7ZinJO0I',
				'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCYSwRVfkV5GPCba4iOOnC9QrA7ZinJO0I'
			});
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
