import {environment} from '../environments/environment';

export class Api {

  books = `${environment.baseUrl}/books`;

  oauthServer = `${environment.baseUrl}/oauth/token`;
  users = `${environment.baseUrl}${environment.apiVersion}/users`;
  activeUser = `${this.users}/active`;

}
