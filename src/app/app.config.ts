import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { importProvidersFrom } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { withComponentInputBinding } from '@angular/router';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideClientHydration(),provideHttpClient()]
// };
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })),
    provideRouter(routes, withComponentInputBinding())
  ]
};
