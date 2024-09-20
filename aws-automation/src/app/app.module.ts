import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
  // {
  //   path: 'aws',
  //   loadChildren: () => import('./aws-svc/aws-svc.module').then(m => m.AwsSvcModule)
  // }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    BrowserModule,
    LoginModule,
    SettingsComponent,
    [RouterModule.forRoot(routes)]
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
