import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
    selector: 'search',
    templateUrl: './search.component.html'
})
export class SearchComponent {
    constructor(private http: Http) { }
   
    zoek = '';
    apiValuesarray: string[] = [];
    ingredienten: string[] = [];
    alles: string[] = [];

    zoeken() {
        this.http.get('https://api.nal.usda.gov/ndb/search/?format=json&q=' + this.zoek + '&sort=n&max=5&offset=0&ds=Branded Food Products&api_key=O8LZuyPzbtntuCwBEaUQObsmWnkkCOjixT7kRGR8')
        .subscribe(
            (res: Response) => {
            
                this.apiValuesarray = res.json().list.item as string[];
                console.log(this.apiValuesarray);

                
            }
        )
    }

    info(ndbno:string) {

        this.http.get('https://api.nal.usda.gov/ndb/reports/?ndbno=' + ndbno + '&type=b&format=json&api_key=O8LZuyPzbtntuCwBEaUQObsmWnkkCOjixT7kRGR8')
            .subscribe(
            (res: Response) => {

                this.alles = res.json().report.food.nutrients;
                this.ingredienten = res.json().report.food.ing.desc as string[];
                console.log(this.alles);


            }
            )

    }
        //O8LZuyPzbtntuCwBEaUQObsmWnkkCOjixT7kRGR8
    }

