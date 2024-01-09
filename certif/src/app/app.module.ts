import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { DashPresiPavionComponent } from './dash-presi-pavion/dash-presi-pavion.component';
import { AcueilComponent } from './acueil/acueil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ServiceComponent } from './service/service.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite/politique-de-confidentialite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashAdminComponent,
    DashPresiPavionComponent,
    AcueilComponent,
    AProposComponent,
    ServiceComponent,
    ActualiteComponent,
    PolitiqueDeConfidentialiteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
