import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
        { component: HomeComponent, path: '' }
    ]
  }, {
    path: '**', redirectTo: '/', pathMatch: 'full' }
];

export const appRoutes = RouterModule.forRoot(routes, { useHash: true });
