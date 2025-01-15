import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { VansComponent } from './pages/vans/vans.component';
import { VanDetailComponent } from './features/components/van-detail/van-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'vans', component: VansComponent },
  { path: 'vans/:id', component: VanDetailComponent },
];
