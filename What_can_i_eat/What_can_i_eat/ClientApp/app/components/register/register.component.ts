import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router";
import { User } from '../models/index';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(private http: Http,
        private router: Router) { }

    register() {
        this.loading = true;
        this.create(this.model).subscribe(
            data => {
                this.router.navigate(['/login']);
            },
            error => {
                this.loading = false;
            });
    }
    create(user: User) {
        return this.http.post('/inlog/register', user);
    }

}
   
