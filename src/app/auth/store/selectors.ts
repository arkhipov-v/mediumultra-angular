import {createFeatureSelector, createSelector} from '@ngrx/store'
import {appStateInterface} from 'src/app/shared/types/appState.interface'
import {AuthStateInterface} from '../types/authState.interface'

export const authFeatureSelector = (
  state: appStateInterface
): AuthStateInterface => state.auth

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)
