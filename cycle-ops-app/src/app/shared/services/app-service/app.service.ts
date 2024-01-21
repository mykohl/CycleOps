import { Injectable } from '@angular/core';
import * as appModel from '../../../../../../data/models/app.model';
import * as appData from '../../../../../../data/app.data.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }

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

  findComponent(id: string): appModel.component | undefined {
    return this.components.find(s => s.id === id);
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
}
