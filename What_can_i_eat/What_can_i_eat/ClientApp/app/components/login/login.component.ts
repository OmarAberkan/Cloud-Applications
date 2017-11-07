import { Component, Inject } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
import { checkLogged } from '../checks/index'
import secrets from '../../Secret';
@Component({
    selector: 'login',
    templateUrl: './login.component.html' 
})

export class LoginComponent {
    model: any = {};
    returnUrl: string;
    public loading:boolean;
    constructor(private http: Http, 
        private route: ActivatedRoute,
        public router: Router	) { 
}

    ngOnInit() {
        this.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    public loginFB() {
      
        FB.getLoginStatus((response) => {
            if (response.status === 'connected') {
                checkLogged.LoggedIn = true;
                this.router.navigate(['']);
            }
            else {
                FB.login((loginResponse) => {
                    this.router.navigate(['']);
                });
            }
        });
       /* FB.login(function (response) {
        
            if (response.status === 'connected') {
               
                console.log(response);
                FB.api('/me', function(response:any) {
                    console.log('Good to see you, ' + response.name + '.');
                    checkLogged.LoggedIn = true;
                });

            }
            else {
                FB.login((loginResponse) => {

                });
            }
        }, { scope: 'email,user_likes' });*/
     
    }

    login() {
        this.loading = true;
        this.log(this.model.username, this.model.password)
            .subscribe(
            data => {
                checkLogged.LoggedIn = true;
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

