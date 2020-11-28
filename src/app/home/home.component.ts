import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: any = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe(data => this.cars = data);
    console.log("Get all succesfull")
  }
}
