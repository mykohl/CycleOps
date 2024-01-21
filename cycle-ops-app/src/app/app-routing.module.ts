import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { WheelWorkshopComponent } from './features/workshops/wheel-workshop/wheel-workshop.component';
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
    component: WheelWorkshopComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
