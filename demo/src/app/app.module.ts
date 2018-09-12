import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgGraphqlModule} from 'ng-graphql';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgGraphqlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
