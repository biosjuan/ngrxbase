import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*
1. **`strictStateImmutability: true`**:
   This setting enforces that you do not directly modify your application's state. Instead, you should create new state objects or use techniques like the spread operator to ensure the state remains immutable.

2. **`strictActionImmutability: true`**:
   By enabling this option, you ensure that actions dispatched to the NgRx Store are not modified after creation. Actions should be treated as unchangeable objects.

3. **`strictActionSerializability: true`**:
   Enforcing `strictActionSerializability` means that actions you send to the store should be serializable, prohibiting non-serializable data like functions or non-JSON-serializable objects.

4. **`strictStateSerializability: true`**:
   With `strictStateSerializability` active, the state in your NgRx Store must be serializable, ensuring that your state tree does not contain data that cannot be serialized.
*/

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}), // need to import HttpClientModule
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
