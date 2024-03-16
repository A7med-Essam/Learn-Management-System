import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  Category:any;

  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _CategoriesService:CategoriesService
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(param => {
      this.getCategoryById(param.get("id"))
    })
  }

  getCategoryById(id:any){
    this._CategoriesService.getCategoryById(id).subscribe( res => {
      this.Category = res.data
    })
  }
}
