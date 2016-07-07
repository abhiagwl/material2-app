import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {Material2AppAppComponent} from './app/material2-app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';




bootstrap(Material2AppAppComponent, [
   disableDeprecatedForms(),
   provideForms(),
  HTTP_PROVIDERS,
]);
