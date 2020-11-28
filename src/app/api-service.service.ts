import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = "http://localhost:8080/car";

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get(this.baseUrl);
  }
}

