import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicFooterComponent } from './core/components/shared/dcs/nav/public-footer/public-footer.component';
import { PublicTopNavComponent } from './core/components/shared/dcs/nav/public-top-nav/public-top-nav.component';
import { HomeComponent } from './core/components/public/home/home.component';
import { ContactUsComponent } from './core/components/public/contact-us/contact-us.component';
import { ServicesComponent } from './core/components/public/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicFooterComponent,
    PublicTopNavComponent,
    HomeComponent,
    ContactUsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
