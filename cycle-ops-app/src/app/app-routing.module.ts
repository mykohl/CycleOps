import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes, Route, LoadChildrenCallback } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { WheelsComponent } from './features/workshops/wheels/wheels.component';
import { AuthService } from './shared/services/auth-service/auth.service';
import { MakersComponent } from './features/admin/makers/makers.component';
import * as appModel from '../../../data/models/app.model';
import * as appData from '../../../data/app.data.json';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent 
  },
  { 
    path: 'admin/lookups/makers',
    loadChildren: () => import('./features/workshops/workshops.module').then((m) => m.WorkshopsModule),
    canActivate: [AuthService],
    data: { rolesAllowed: ["admin"] },
    component: MakersComponent
  },
  /*
  {
    path: 'wheels',
    loadChildren: () => import('./features/workshops/workshops.module').then((m) => m.WorkshopsModule),
    component: WheelsComponent 
  },
  */
  //...AppRoutingHelper.componentRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@Injectable({
  providedIn: 'root'
})
export class AppRoutingHelper {
  static get componentRoutes(): Routes {
    let componentRoutes: Routes = [];

    appData.features.forEach((f: appModel.feature) => {
      f.components.forEach((c: appModel.component) => {
        let addRoute: Route = {};
  
        addRoute.path = c.route;
        addRoute.component = this._mapComponent(c.id);
  
        const mappedModule = this._mapModule(f.id);
        if(mappedModule) addRoute.loadChildren = mappedModule;

        if(c.rolesAllowed !== '*') {
          addRoute.canActivate = [AuthService];
          addRoute.data = { rolesAllowed: c.rolesAllowed };
        }

        componentRoutes.push(addRoute);
      });
    });

    return componentRoutes;
  }
  
  private static _mapComponent(id: string): any {
    switch(id) {
      case 'makers':
        return MakersComponent;
      case 'wheels':
        return WheelsComponent;
      default:
        return HomeComponent;
    }
  }

  private static _mapModule(id: string): LoadChildrenCallback | undefined {
    switch(id) {
      case 'admin':
        return () => import('./features/admin/admin.module').then((m) => m.AdminModule);
      case 'workshops':
        return () => import('./features/workshops/workshops.module').then((m) => m.WorkshopsModule);
      default:
        return undefined;
    }
  }
}