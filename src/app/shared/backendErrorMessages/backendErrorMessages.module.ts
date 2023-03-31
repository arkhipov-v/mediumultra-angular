import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {BackendErrorMessagesComponent} from './components/backendErrorMassages/backendErrorMassages.component'

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorMessagesComponent],
  exports: [BackendErrorMessagesComponent],
})
export class BackendErrorMessagesModule {}
