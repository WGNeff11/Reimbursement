export class User {
    public id: number;
    public username: string;
    public firstname: string;
    public lastname: string;
    public email: string;
    public role: Role;
  }
export class Role {
    public roleId: number;
    public roleName: string;
}
