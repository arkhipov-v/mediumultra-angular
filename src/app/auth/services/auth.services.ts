import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {currentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {registerRequestInterface} from '../types/registerRequest.interface'
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment.development'
import {authResponsiveInterface} from '../types/authResponse.interface'
import {Injectable } from '@angular/core'


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: registerRequestInterface): Observable<currentUserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http
      .post<authResponsiveInterface>(url, data)
      .pipe(map((response: authResponsiveInterface) => response.user))
  }
}
