import {backendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {currentUserInterface} from 'src/app/shared/types/currentUser.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: currentUserInterface | null
  isLoggedIn: boolean | null
  validationErrors: backendErrorsInterface | null
}
