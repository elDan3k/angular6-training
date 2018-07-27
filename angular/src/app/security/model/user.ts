export class User {

  name: string;
  roles: string[] = [];

  constructor(json) {
    this.name = json.username;
    json.roles.forEach(role => {
      this.roles.push(role.name.replace('ROLE_', ''));
    });
  }

}
