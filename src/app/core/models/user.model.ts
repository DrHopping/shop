export interface UserModel {
  role: RoleEnum;
}

export enum RoleEnum {
  User = 'User',
  Admin = 'Admin',
}
