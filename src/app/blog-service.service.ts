import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

    myData:any;

    constructor(private http: HttpClient) { }

    makeupDetails() {
        this.http.get('assets/data.json')
            .subscribe( (data:any) => {
                this.myData=data;
                console.log(this.myData);
            });
        console.log(this.myData);
    }
}
