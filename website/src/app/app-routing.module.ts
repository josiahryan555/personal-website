import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AppComponent } from './app.component';
// import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProjInfoPageComponent } from './components/proj-info-page/proj-info-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'proj-info/:id', component: ProjInfoPageComponent },
  // { path: 'contact-form', component: ContactFormComponent },
  { path: 'landing-page', component: LandingPageComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
