import {Component, Input, OnInit} from '@angular/core'
import {backendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

@Component({
  selector: 'mc-backend-error-massages',
  templateUrl: './backendErrorMassages.component.html',
  styleUrls: ['./backendErrorMassages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: backendErrorsInterface

  errorMessages: string[]

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(', ')
        return `${name} ${messages}`
      }
    )
  }
}
