import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfigService } from 'src/app/core/Service_configurations/service-config.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private _ServiceConfig:ServiceConfigService
  ) { }
  

  getAllCategories():Observable<any>{
    return this._ServiceConfig.getReq('categories')
  }

  getCategoryById(id:number):Observable<any>{
    const formData = new FormData()
    formData.append("id",id.toString())
    return this._ServiceConfig.postReq('categories/show',formData)
  }

}
