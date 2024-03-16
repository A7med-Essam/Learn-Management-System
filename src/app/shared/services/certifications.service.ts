import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfigService } from 'src/app/core/Service_configurations/service-config.service';
import { ICertification } from '../interfaces/certification';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  constructor(
    private _ServiceConfig:ServiceConfigService
  ) { }

  getAllCert(topic_id:any): Observable<ICertification[]>{
    let params = new HttpParams().set("topic_id", topic_id)
    return this._ServiceConfig.getReq('Certificate',params)
  }

  getCertById(id:any): Observable<ICertification>{
    let params = new HttpParams().set("certificate_id", id)
    return this._ServiceConfig.getReq('Certificate/show',params)
  }
}
