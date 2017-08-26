import { Injectable } from '@angular/core'
import { Entry } from './entry.model';
import { Http } from '@angular/http';

@Injectable()
export class EntryService  {

    constructor(private http: Http) {
        // if no access modifier specified http service will be avaiable only inside the constructor
    }

    getEntries(): Promise<Entry[]> {
        return this.http.get('/app/entries')
                        .toPromise()
                        .then(response=>response.json().data as Entry[]);
    }
}