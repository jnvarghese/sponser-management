import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Sponser } from '../../model/sponser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SponserService {

  private sponserUrl = 'api/sponsers';  // URL to web api

  constructor( private http: HttpClient) { }

  /** GET heroes from the server */
  getSponser (): Observable<Sponser[]> {
    return this.http.get<Sponser[]>(this.sponserUrl);
  }
}
