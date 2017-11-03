import { Component, Inject } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    model: any = {};
    returnUrl: string;
    loading: Boolean;
    constructor(private http: Http, 
        private route: ActivatedRoute,
        private router: Router,) { }

    ngOnInit() {
        this.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.log(this.model.username, this.model.password)
            .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.loading = false;
            });
    }

    log(username: string, password: string) {
        return this.http.post('/inlog/login', { username: username, password: password })
            .map((response: Response) => {
                let user = response.json();
               
            });
    }

    logout() {
       // localStorage.removeItem('currentUser');
    }
}

