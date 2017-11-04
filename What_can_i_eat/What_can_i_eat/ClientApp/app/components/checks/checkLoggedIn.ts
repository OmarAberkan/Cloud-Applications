import { Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()

export class checkLogged implements CanActivate {
    static LoggedIn: Boolean = false;
    static route: Router;
    constructor(public router: Router, private http: Http) { }

    canActivate() {

        if (checkLogged.LoggedIn) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;


    }
  
}