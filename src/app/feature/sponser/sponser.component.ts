import { Component, OnInit } from '@angular/core';
import { Sponser } from '../model/sponser';
import { SponserService } from '../shared/service/sponser.service';

@Component({
  selector: 'app-sponser',
  templateUrl: './sponser.component.html',
  styleUrls: ['./sponser.component.css']
})
export class SponserComponent implements OnInit {

  private sponsers: Sponser[];

  constructor(private sponserService: SponserService) { }

  ngOnInit() {
   this.sponserService.getSponser().subscribe(data => {
      // Read the result field from the JSON response.
      this.sponsers = data;
    });
  }

}
