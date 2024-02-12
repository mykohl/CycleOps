import { Injectable } from '@angular/core';
import * as appModel from '../../../../../../data/models/model.app';
import * as appData from '../../../../../../data/app.data.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }

  static get branding(): appModel.branding {
    return appData.branding;
  }

  static get features(): appModel.feature[] {
    const features = appData.features.sort((a, b) => a.order - b.order);
    features.forEach(f => {
      f.components = f.components.sort((a, b) => a.order - b.order);
    });
    return features;
  }

  static get components(): appModel.component[] {
    return appData.features.flatMap(
      (f: appModel.feature) => f.components
    ).sort((a, b) => a.order - b.order);
  }

  static get highlightComponents(): appModel.component[] {
    return this.components.filter(c => c.isHighlight);
  }

  static get availableRoles(): string[] {
    return appData.roles;
  }

  static get dialogTypes(): appModel.dialogType[] {
    return appData.dialogTypes;
  }

  static findComponent(id: string): appModel.component | undefined {
    return this.components.find(s => s.id === id);
  }

  static findDialogType(type: string): appModel.dialogType | undefined {
    return appData.dialogTypes.find(d => d.type === type);
  }

  static getRoleFeatures(role: string): appModel.feature[] {
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
