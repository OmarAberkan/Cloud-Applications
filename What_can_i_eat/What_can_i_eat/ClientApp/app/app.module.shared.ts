import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { checkLogged } from './components/checks/index'
@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        RegisterComponent,
        LoginComponent,
        HomeComponent,  
        NavMenuComponent
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
             { path: 'search', component: SearchComponent },
        ])
    ]
})
export class AppModuleShared {
}
