import {NgModule, isDevMode} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {StoreModule} from '@ngrx/store'
import {AppRoutingModule} from './app-routing.module'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

import {AppComponent} from './app.component'
import {AuthModule} from './auth/auth.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
