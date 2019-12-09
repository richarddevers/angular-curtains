import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { HttpClient, HttpXhrBackend } from '@angular/common/http';
const httpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
setInterval(function(){
  httpClient.get("https://curtains-calculator.herokuapp.com").subscribe(
    () => console.log('ping'),
    () => console.log('pong')
      );
}, 30000);

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));