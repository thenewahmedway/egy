import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutCovidComponent } from './components/about-covid/about-covid.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'countries', component:CountriesComponent},
  {path:'aboutcovid', component:AboutCovidComponent},
  {path:'privacy', component:PrivacyComponent},
  {path:'contact', component:ContactComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
