import { Component, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
import { User } from "../models/index";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(private http: Http,
        private route: ActivatedRoute,
        private router: Router) {
        this.session();
    }
    private currentUser: User;
     
        

       session() {
           
            this.http.post('http://localhost:4133/inlog/getsession', "").map((response: Response) => {
                let user = response.json();
                this.currentUser = user;
                });
        }
    }
   

