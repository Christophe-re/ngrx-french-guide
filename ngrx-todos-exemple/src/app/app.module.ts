import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {appRouting} from './app.routing';
import {getReducers, REDUCER_TOKEN} from './store';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'environments/environment';

import {HttpClientModule} from '@angular/common/http';
import {TodoListService} from './services/todo-list.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    ReactiveFormsModule,
    FormsModule,
    appRouting,
    StoreDevtoolsModule.instrument({
      name: '[TODOLIST]',
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    HttpClientModule
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers,
    },
    TodoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

