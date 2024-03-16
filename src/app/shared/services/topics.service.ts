import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfigService } from 'src/app/core/Service_configurations/service-config.service';
import { ITopic } from '../interfaces/topic';


@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  
  constructor(
    private _ServiceConfig:ServiceConfigService
  ) { }

  getTopicById(topic_id:number): Observable<ITopic>{
    const formData = new FormData()
    formData.append("id",topic_id.toString())
    return this._ServiceConfig.postReq('topics/show',formData)
  }

  getAllTopics(): Observable<ITopic[]>{
    return this._ServiceConfig.getReq('topics')
  }

  getAllTopicsByCategoryId(category_id:any): Observable<ITopic[]>{
    let params = new HttpParams().set("category_id", category_id)
    return this._ServiceConfig.getReq('topics',params)
  }

}
