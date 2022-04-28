import { Injectable } from "@angular/core";
import { UserModel, RoleEnum } from "../models/user.model";

@Injectable({providedIn: "root"})
export class AuthService {
  private user: UserModel = { role: RoleEnum.User };

  isCurrentUserAdmin(): boolean {
    return this.user.role === RoleEnum.Admin;
  }

  updateRole(newRole: RoleEnum): void {
    this.user.role = newRole;
  }
}
