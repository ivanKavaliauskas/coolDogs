import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dog } from '../dog';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})
export class DogComponent implements OnInit {
 
  dog: Dog = new Dog();

  constructor(private dogService: DogsService, private router: Router,) { }

 ngOnInit() {
    this.dogService.getDog().subscribe(data => {   
      this.dog.ImageUrl = data.message;
      this.dog.Status = data.status;
      console.log(this.dog);
    })
  }
}
