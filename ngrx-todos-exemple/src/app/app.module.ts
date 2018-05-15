import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'environments/environment';
import {IsTodosLoadedGuard} from './guards/is-todos-loaded/is-todos-loaded.guard';
import {AppComponent} from './app.component';
import {appRouting} from './app.routing';
import {TodoListService} from './services/todo-list.service';
import {appEffects, getReducers, REDUCER_TOKEN} from './store';

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
    HttpClientModule,
    EffectsModule.forRoot(appEffects),
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers,
    },
    TodoListService,
    IsTodosLoadedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

