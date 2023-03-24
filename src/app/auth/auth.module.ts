import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'

import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {StoreModule} from '@ngrx/store'
import {reducer} from './store/reducers'

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
  ],
})
export class AuthModule {}
