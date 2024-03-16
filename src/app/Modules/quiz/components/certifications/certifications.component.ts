import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CertificationsService } from 'src/app/shared/services/certifications.service';
import { TopicsService } from 'src/app/shared/services/topics.service';
import {ICertification} from '../../../../shared/interfaces/certification'

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})

export class CertificationsComponent implements OnInit {
  Certificates:ICertification[] = [];
  more:boolean = false;
  Topic_Title:string = "";
  constructor(
    private _CertificationsService:CertificationsService,
    private _ActivatedRoute:ActivatedRoute,
    private _TopicsService:TopicsService,
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe( (param:any) => {
      this.getAllCert(param.get("id"))
    })
  }

  getAllCert(topic_id:number){
    this._CertificationsService.getAllCert(topic_id).subscribe( (res:any) => {
      this.Certificates = res.data
    },
    (err:any) =>{
      console.log(err)
    },
    ()=>{
      this._TopicsService.getTopicById(topic_id).subscribe( (res:any) => {
        this.Topic_Title = res.data.title
      })
    })
  }

}
