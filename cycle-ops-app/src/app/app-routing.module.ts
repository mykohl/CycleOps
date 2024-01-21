import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WheelWorkshopComponent } from './components/wheel-workshop/wheel-workshop.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthService } from './services/auth-service/auth.service';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent },
  { 
    path: 'admin',
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
