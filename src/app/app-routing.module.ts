import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';
import { AngularFireAuth } from '@angular/fire/auth';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'useroptions',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate : [AuthGuard] }, // agregado por (Favio) Revisar
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule', canActivate : [AuthGuard] },
  { path: 'challenges', loadChildren: './challenges/challenges.module#ChallengesPageModule', canActivate : [AuthGuard] },
  { path: 'leaderboard', loadChildren: './leaderboard/leaderboard.module#LeaderboardPageModule', canActivate : [AuthGuard] },
  { path: 'sponsors', loadChildren: './sponsors/sponsors.module#SponsorsPageModule', canActivate : [AuthGuard] },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule', canActivate : [AuthGuard] },
  { path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackPageModule', canActivate : [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate : [NologinGuard] },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule', canActivate : [NologinGuard]},
  { path: 'useroptions', loadChildren: './useroptions/useroptions.module#UseroptionsPageModule', canActivate : [AuthGuard] }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
