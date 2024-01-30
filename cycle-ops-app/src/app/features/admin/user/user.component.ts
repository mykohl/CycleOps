import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ApiReqUserService } from '../../../shared/services/api-request-services/user-request-service/api-req-user.service';
import { UserDto } from '../../../../../../data/models/model.dto';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class UserComponent {

  private _userList: UserDto[] = [];
  expandedUser: UserDto | null = null;

  columnDef = [
    { key: 'id', title: 'Id' },
    { key: 'nameLast', title: 'Last Name' },
    { key: 'nameFirst', title: 'First Name' },
    { key: 'role', title: 'Role' },
    { key: 'registered', title: 'Registered On' }
  ]

  constructor(private _apiReqUserService: ApiReqUserService) {
  }

  ngOnInit() {
    const userFetch = this._apiReqUserService.getUsers().subscribe((result) => {
      this._userList = result;
    });
  }

  get userList(): UserDto[] {
    return this._userList;
  }

  get displayColumns(): string[] {
    return this.columnDef.map(c => c.key);
  }

  get displayColumnsExpanded(): string[] {
    return [...this.displayColumns, 'expand'];
  }

  findColumnTitle(key: string): string | undefined {
    return this.columnDef.find(c => c.key === key)?.title
  }
}