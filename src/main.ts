import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LucideAngularModule, Home, Newspaper, MessageCircle, LogOut, Calendar, Search, User, Lock, Eye, EyeOff } from 'lucide-angular';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(
      LucideAngularModule.pick({ Home, Newspaper, MessageCircle, LogOut, Calendar, Search, User, Lock, Eye, EyeOff })
    )
  ]
}).catch((err) => console.error(err));
