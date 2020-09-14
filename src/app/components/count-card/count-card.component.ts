import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-card',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.scss']
})
export class CountCardComponent implements OnInit {
  
  public title: String;
  public count: String;


  constructor() { }

  ngOnInit(): void {
  }

}
