import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LucideAngularModule, Home, Newspaper, MessageCircle, LogOut, Calendar, Search, UserPen, Lock, Eye, EyeOff } from 'lucide-angular';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(
      LucideAngularModule.pick({ Home, Newspaper, MessageCircle, LogOut, Calendar, Search, UserPen, Lock, Eye, EyeOff })
    ),

    provideRouter(routes)
  ]
}).catch((err) => console.error(err));


