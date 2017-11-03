import { Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()

export class checkLogged implements CanActivate {
    constructor(private router: Router, private http: Http) { }

    canActivate() {


        this.http.post('http://localhost:4133/inlog/getsession', "").subscribe(
            data => {  return true; }, err => {
                this.router.navigate(['/login']);
                return false;
            });
       
        return false;


    }
}