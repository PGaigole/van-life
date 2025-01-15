import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// Import the MirageJS server
import './server';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
