import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'

import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {StoreModule} from '@ngrx/store'
import {reducer} from './store/reducers'
import {AuthService} from './services/auth.services'
import {EffectsModule} from '@ngrx/effects'
import {RegisterEffect} from './store/effects/register.effect'
import {BackendErrorMessagesModule} from '../shared/backendErrorMessages/backendErrorMessages.module'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]
@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
