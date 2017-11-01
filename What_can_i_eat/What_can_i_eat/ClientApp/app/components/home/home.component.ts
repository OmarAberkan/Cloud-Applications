import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    private baseUrl = "";

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        baseUrl = this.baseUrl;

    }
    public login() {
        this.http.post(this.baseUrl + 'api/SampleData/', {}).subscribe(result => {
            console.log(result);
        }, error => console.error(error));
    }
}
