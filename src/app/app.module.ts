import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from './modules/material/material.module';
import { LoginService } from './services/login.service';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule, MaterialModule,
    HttpModule, routing
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
