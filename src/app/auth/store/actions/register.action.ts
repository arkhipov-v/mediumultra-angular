import {createAction, props} from '@ngrx/store'
import {currentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {registerRequestInterface} from '../../types/registerRequest.interface'
import {ActionTypes} from '../actionTypes'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: registerRequestInterface}>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser: currentUserInterface}>()
)

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE)
