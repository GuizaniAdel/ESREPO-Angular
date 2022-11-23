import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MatieresComponent } from './matieres/matieres.component';
import { MatiereComponent } from './matiere/matiere.component';
import { ClassesComponent } from './classes/classes.component';
import { FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

import { AproposComponent } from './apropos/apropos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MatieresComponent,
    MatiereComponent,
    ClassesComponent,
    NotFoundComponent,
    FooterComponent,
    AproposComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    SocialLoginModule,




  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '80169836792-v8imek7od6hm7614o89801djv4h5gjio.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
