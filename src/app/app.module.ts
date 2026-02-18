import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ModulesComponent } from './components/modules/modules.component';
import { FooterComponent } from './components/footer/footer.component';
import { Module1Component } from './components/module1/module1.component';
import { Module2Component } from './components/module2/module2.component';
import { JsProjectsComponent } from './components/js-projects/js-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ProfileComponent,
    ModulesComponent,
    FooterComponent,
    Module1Component,
    Module2Component,
    JsProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }