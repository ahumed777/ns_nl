import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { defineCustomElements } from '@nessie/webcomponents/loader';
import { getNessieAssetPath } from "@nessie/webcomponents";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // without custom assets path, fallback to the base URL
defineCustomElements();

// with custom assets path, prefixes assets requests with provided URL (bucket to Nessie assets)
defineCustomElements(window, {
  resourcesUrl: getNessieAssetPath(),
});