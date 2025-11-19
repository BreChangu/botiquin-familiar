// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // <-- CORREGIDO (antes decía 'App')

bootstrapApplication(AppComponent, appConfig) // <-- CORREGIDO (antes decía 'App')
  .catch((err) => console.error(err));