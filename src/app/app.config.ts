import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, type Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userReducer } from './users/store/user.reducer';
import { UserEffects } from './users/store/user.effects';
import { USER_ROUTES } from './users/user.routes';

const routes: Routes = [
  {
    path: 'users',
    children: USER_ROUTES,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
  {
    path: '**',
    redirectTo: 'users',
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Routing
    provideRouter(routes),

    // HTTP client
    provideHttpClient(),

    // Animations
    provideAnimations(),

    // NgRx Store – users feature
    provideStore({
      users: userReducer,
    }),
    provideEffects(UserEffects),
  ],
};
