import { Routes } from '@angular/router';

import { LoginComponent } from './core/auth/components/login/login.component';
import { HomePageComponent } from './features/views/home-page/home-page.component';
import { NotAuthorizedComponent } from './core/auth/components/not-authorized/not-authorized.component';
import { NotFoundComponent } from './core/auth/components/not-found/not-found.component';
import { UserProfileComponent } from './core/auth/components/user-profile/user-profile.component';

export const routes: Routes = [
   { path: "", redirectTo: "login", pathMatch: "full" },

   { path: "login", component: LoginComponent },
   { path: "home", component: HomePageComponent, /* canActivate: [ AuthenticationGuard ] */ },

   { path: "perfil", component: UserProfileComponent, /* canActivate: [ AuthenticationGuard, RoleGuard ] */ },
   // Rotas a nível de projeto acima deste comentário

   { path: "unauthorized-access", component: NotAuthorizedComponent },
   { path: "**", component: NotFoundComponent }
];
