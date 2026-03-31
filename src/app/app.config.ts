import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { ExtraOptions, provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes, withViewTransitions())],
};
