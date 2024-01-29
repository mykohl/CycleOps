import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes, Route, LoadChildrenCallback } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { UserComponent } from './features/admin/user/user.component';
import { WheelsComponent } from './features/workshops/wheels/wheels.component';
import { AuthService } from './shared/services/auth-service/auth.service';
import * as appModel from '../../../data/models/model.app';
import * as appData from '../../../data/app.data.json';

@Injectable({
  providedIn: 'root'
})
export class AppRoutingHelper {
  // Gets data regarding feature/component layout from app.data.json, and builds an array of routes based on that layout.
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
  
  // get components for routes
  private static _mapComponent(id: string): any {
    switch(id) {
      case 'wheels':
        return WheelsComponent;
      case 'users':
        return UserComponent;
      default:
        return HomeComponent;
    }
  }

  // get modules for lazy loading.
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

// Then the actual module uses routes built by the helper class.
@NgModule({
  imports: [RouterModule.forRoot([
      { 
        path: '',
        component: HomeComponent 
      },
      ...AppRoutingHelper.componentRoutes
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
