import { Component, Injectable } from '@angular/core';
import { Route } from '@angular/router';
import * as appModel from '../../../../../../data/models/app.model';
import * as appData from '../../../../../../data/app.data.json';
import { AuthService } from '../auth-service/auth.service';
import { AdminComponent } from '../../../features/admin/admin.component';
import { HomeComponent } from '../../../features/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }

  findComponent(id: string): appModel.component | undefined {
    return this.components.find(s => s.id === id);
  }

  get branding(): appModel.branding {
    return appData.branding;
  }

  get features(): appModel.feature[] {
    const features = appData.features.sort((a, b) => a.order - b.order);
    features.forEach(f => {
      f.components = f.components.sort((a, b) => a.order - b.order);
    });
    return features;
  }

  get components(): appModel.component[] {
    return appData.features.flatMap(
      (f: appModel.feature) => f.components
    ).sort((a, b) => a.order - b.order);
  }

  get highlightComponents(): appModel.component[] {
    return this.components.filter(c => c.isHighlight);
  }

  getRoleFeatures(role: string): appModel.feature[] {
    let roleFeatures = appData.features.filter(f => 
      f.rolesAllowed === '*' || f.rolesAllowed.includes(role)
    );
    roleFeatures.forEach((f: appModel.feature) => 
      f.components = f.components.filter(c => 
        c.rolesAllowed === '*' || c.rolesAllowed.includes(role)
      )
    );
    return roleFeatures;
  }

/*
  get featureRoutes(): Route[] {
    let featureRoutes: Route[] = [];
    this._features.forEach(f => {
      let addRoute: Route = {};
      addRoute.path = f.route;
      addRoute.component = this._mapFeatureComponents(f.id);
      if(f.rolesAllowed === '*') {
        addRoute
      }


      const fr: Route = {
        path: f.route,
        canActivate: [AuthService]
      };
    });
  }
  */

  private _mapFeatureComponents(id: string): any {
    switch(id) {
      case 'admin':
        return AdminComponent;
      default:
        return HomeComponent;
    }
  }
}
