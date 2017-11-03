import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { checkLogged } from './components/checks/index'
@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        RegisterComponent,
        LoginComponent,
        HomeComponent
    ], providers: [
         checkLogged
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, canActivate : [checkLogged] },
             { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ])
    ]
})
export class AppModuleShared {
}
