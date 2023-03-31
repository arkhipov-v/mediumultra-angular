import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, switchMap} from 'rxjs/operators'
import {AuthService} from '../../services/auth.services'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action'
import {currentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {of} from 'rxjs'
import {HttpErrorResponse} from '@angular/common/http'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: currentUserInterface) => {
            return registerSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private authService: AuthService) {}
}
