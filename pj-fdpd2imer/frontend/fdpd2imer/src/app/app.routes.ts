import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'search',
    loadChildren: () =>
      import('./features/search/search.module').then((m) => m.SearchModule),
  },
  // {
  //   path: 'feature2',
  //   loadChildren: () =>
  //     import('./features/feature2/feature2.module').then(
  //       (m) => m.Feature2Module
  //     ),
  // },
];
