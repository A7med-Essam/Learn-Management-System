import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
score!:number;
totalQuestions!:number;
  constructor(
    private ActivatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe( (param:any) => {
      this.score = param.get("score")
      this.totalQuestions = param.get("totalQuestions")
    })
  }

}
