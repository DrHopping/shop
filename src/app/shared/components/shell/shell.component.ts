import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';
import { RoleEnum } from '../../../core/models/user.model';
import { DropdownItemModel } from '../../models/dropdown-item.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  @Input() appName!: string;

  isCurrentUserAdmin = false;
  roleList = [
    new DropdownItemModel('User', RoleEnum.User, true),
    new DropdownItemModel('Admin', RoleEnum.Admin, false),
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isCurrentUserAdmin = this.authService.isCurrentUserAdmin();
  }

  onRoleChange(event: DropdownItemModel<RoleEnum>): void {
    this.authService.updateRole(event.value);
    this.isCurrentUserAdmin = this.authService.isCurrentUserAdmin();
  }
}
