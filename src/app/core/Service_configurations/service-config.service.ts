import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceConfigService {

  constructor(
    private http:HttpClient
  ) { }

  getReq(url:string, params?:HttpParams):Observable<any>{
    return this.http.get(environment.UrlEndPoint + url, { params:params })
  }

  postReq(url:string,body:any, params?:HttpParams):Observable<any>{
    return this.http.post(environment.UrlEndPoint + url, body, { params:params })
  }

  putReq(url:string,body:any, params?:HttpParams):Observable<any>{
    return this.http.put(environment.UrlEndPoint + url, body, { params:params })
  }

  deleteReq(url:string, body?:any, params?:HttpParams):Observable<any>{
    const RequestOptions = {
      body: body,
      params: params
    }

    return this.http.get(environment.UrlEndPoint+url, RequestOptions)
  }
}
