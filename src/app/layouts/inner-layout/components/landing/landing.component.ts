import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { TopicsService } from 'src/app/shared/services/topics.service';
import { ITopic } from 'src/app/shared/interfaces/topic';
import { ICategory } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  categories:ICategory[] = []
  recentTopics:ITopic[] = [];
  TopicsCount:number = 0;

  constructor(
    private _CategoriesService:CategoriesService,
    private _TopicsService:TopicsService
  ) { }

  ngOnInit(): void {
    this.getAllCategories()
    this.getAllTopics()
  }



  getAllCategories(){
    this._CategoriesService.getAllCategories().subscribe( res => {
      this.categories = res.data
    })
  }

  getAllTopics(){
    this._TopicsService.getAllTopics().subscribe( (res:any) =>{
      this.recentTopics = res.data
      this.TopicsCount = this.recentTopics.length;
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    center:false,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    }
  }

  companies:string[] = 
  [
    '<img src="../../../assets/imgs/home image/1.jpg" class="img-fluid rounded" alt="">',
    '<img src="../../../assets/imgs/home image/2.jpg" class="img-fluid rounded" alt="">',
    '<img src="../../../assets/imgs/home image/3.jpg" class="img-fluid rounded" alt="">',
    '<img src="../../../assets/imgs/home image/1.jpg" class="img-fluid rounded" alt="">',
    '<img src="../../../assets/imgs/home image/2.jpg" class="img-fluid rounded" alt="">',
    '<img src="../../../assets/imgs/home image/3.jpg" class="img-fluid rounded" alt="">',
  ]
  
}
