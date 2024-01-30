import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ApiReqUserService } from '../../../shared/services/api-request-services/user-request-service/api-req-user.service';
import { UserDto } from '../../../../../../data/models/model.dto';
import { UserService } from '../../../shared/services/user-service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class UserComponent {
  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this._paginator = paginator;
    if(this.userDataSource) this.userDataSource.paginator = this._paginator;
  } 
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this._sort = sort;
    if(this.userDataSource) this.userDataSource.sort = this._sort;
  }

  private _paginator: MatPaginator;
  private _sort: MatSort;
  private _userList: UserDto[];
  private _expandedUser: UserDto | null;

  userDataSource: MatTableDataSource<UserDto>;
  columnDef = [
    { key: 'id', title: 'Id', sort: false },
    { key: 'nameLast', title: 'Last Name', sort: true },
    { key: 'nameFirst', title: 'First Name', sort: true },
    { key: 'role', title: 'Role', sort: false },
    { key: 'registered', title: 'Registered On', sort: false }
  ]
  availableRoles = [
    "admin",
    "standard",
    "disabled"
  ]

  constructor(
    private _apiReqUserService: ApiReqUserService,
    private _userService: UserService,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    const userFetch = this._apiReqUserService.getUsers().subscribe((result) => {
      this._userList = result;
      this.userDataSource = new MatTableDataSource(result);
    });
  }

  get currentUser(): UserDto | null {
    return this._userService.siteUser;
  }

  get selectedUser(): UserDto {
    if(this._expandedUser) return this._expandedUser;
    return { 
      id: undefined,
      name: null,
      nameFirst: null,
      nameLast: null,
      role: null,
      registered: null,
      lastLogIn: null,
      provider: null,
      providerId: ""
     };
  }

  set selectedUser(user: UserDto) {
    if(user.id !== this._userService.siteUser?.id) {
      if(user.id === this._expandedUser?.id) {
        this._expandedUser = null;
      } else {
        this._expandedUser = user;
      }
    }
  }

  get userRole(): string {
    return this._expandedUser?.role ?? "standard";
  }

  set userRole(newRole: string) {
    if(this._expandedUser?.role && this._expandedUser.role !== newRole) {
      this._expandedUser.role = newRole;
      this._apiReqUserService.updateUser(this._expandedUser).subscribe((result) => {
        this._snackBar.open(
          `Role updated for ${this._expandedUser?.name}`, 'Dismiss',
          { duration: 3600 }
        );
      });
    }
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

  isSortable(key: string): boolean {
    return this.columnDef.find(c => c.key === key)?.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userDataSource.filter = filterValue.trim().toLowerCase();

    if (this.userDataSource.paginator) {
      this.userDataSource.paginator.firstPage();
    }
  }
}