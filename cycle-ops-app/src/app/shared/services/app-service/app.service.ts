import { Injectable } from '@angular/core';
import * as appModel from '../../../../../../data/models/app.model';
import * as appData from '../../../../../../data/app.data.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _appBranding: appModel.appBranding = appData.branding as appModel.appBranding;
  private _appMenus: appModel.appMenu[] = appData.menu as appModel.appMenu[];
  private _appSections: appModel.appSection[] = appData.sections as appModel.appSection[];

  constructor() { }

  findSection(id: string): appModel.appSection | undefined {
    return appData.sections.find(s => s.id === id);
  }

  get branding(): appModel.appBranding {
    return this._appBranding;
  }

  get menu(): appModel.appMenu[] {
    return this._appMenus.sort((a, b) => a.order - b.order);
  }

  get sections(): appModel.appSection[] {
    return this._appSections.sort((a, b) => a.order - b.order);
  }

  getSectionPath(id: string): string | undefined {
    const section = this.findSection(id);
    const menu = this._appMenus.find(m => m.sections.includes(id));
    if(menu) {
      if(menu.sections.length === 1) return menu.title;
      return `${menu.title} >> ${section?.title}`;
    }
    return undefined;
  }
}
