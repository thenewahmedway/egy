import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms' 
import{HttpClientModule, HttpClient} from '@angular/common/http';

//select
import { CountToModule } from 'angular-count-to';
// drop down
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
//charts
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
//translate
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
 //scroll
import {Ng2PageScrollModule} from 'ng2-page-scroll';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutCovidComponent } from './components/about-covid/about-covid.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CountriesComponent,
    NotfoundComponent,
    FooterComponent,
    AboutCovidComponent,
    PrivacyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    //.. count to 
    CountToModule,
    // drop down
    DropDownListModule,
    // charts
    Ng2GoogleChartsModule,
     //tramslate
    TranslateModule.forRoot({
      defaultLanguage:'ar',
          loader:{
            provide:TranslateLoader,
            useFactory:CreateTranslateLoader,
            deps:[HttpClient]
            }
        }
    ),
    Ng2PageScrollModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function CreateTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')

}
