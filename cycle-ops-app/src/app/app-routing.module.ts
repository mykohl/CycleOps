import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { WheelsComponent } from './features/workshops/wheels/wheels.component';
import { AdminComponent } from './features/admin/admin.component';
import { AuthService } from './shared/services/auth-service/auth.service';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent },
  { 
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthService],
    data: { rolesAllowed: ["admin"] },
    component: AdminComponent
  },
  {
    path: 'wheels',
    loadChildren: () => import('./features/workshops/workshops.module').then((m) => m.WorkshopsModule),
    component: WheelsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
