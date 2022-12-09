import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProjInfoPageComponent } from './components/proj-info-page/proj-info-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    PortfolioCardComponent,
    ProjInfoPageComponent,
    ContactFormComponent,
    HeaderComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
