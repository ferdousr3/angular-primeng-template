import { ApplicationConfig, provideAppInitializer, provideExperimentalZonelessChangeDetection, } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withInMemoryScrolling, withPreloading, withRouterConfig } from '@angular/router';

import { appInitializerFn, ENVIRONMENT } from '../libs/core';
import { environment } from '../environment/environment.prod';
import { ACCESS_TOKEN_KEY, AUTH_API_URL, REFRESH_TOKEN_KEY } from '../libs/auth';
import { appRoutes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ENVIRONMENT, useValue: environment },
    { provide: AUTH_API_URL, useValue: environment.authApiUrl },
    { provide: ACCESS_TOKEN_KEY, useValue: 'accessToken' },
    { provide: REFRESH_TOKEN_KEY, useValue: 'refreshToken' },
    provideAppInitializer(appInitializerFn),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      appRoutes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withComponentInputBinding(),
      withPreloading(PreloadAllModules),
    ),
  ]
};
