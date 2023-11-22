import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  public baseUrl = "https://dog.ceo/api/breeds/image/random";

  constructor(private httpClient: HttpClient) { }

  public getDog(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
