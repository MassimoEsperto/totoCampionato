import { ApplicationConfig } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeature,withHashLocation()),
    provideHttpClient()
  ]
};
