import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  cancel(){
    this.router.navigate(['/students']);
  }

}
