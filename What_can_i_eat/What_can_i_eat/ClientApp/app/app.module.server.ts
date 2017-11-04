import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';
import './components/login/getFBSDK';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        ServerModule,
        AppModuleShared
    ]
})
export class AppModule {
}
