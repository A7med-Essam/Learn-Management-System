import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicsService } from 'src/app/shared/services/topics.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _TopicsService:TopicsService
    ) {}
  fixedTop!: boolean;
  mouseOveredIndx!: number;
  mouseOvered!: boolean;
  topic: any;

  // @HostListener('window:scroll', ['$event']) onScrollEvent($event:any) {
  //   let mainSectionbottom = document
  //   .querySelector('.main-sec')
  //   ?.getBoundingClientRect().bottom;
  //   mainSectionbottom != undefined && mainSectionbottom <= 0
  //   ? (this.fixedTop = true)
  //   : (this.fixedTop = false);
  // }

  relatedCourses = [
    {
      img: '../../../assets/imgs/back9.jpg',
      title: 'Back end course',
      UserEnrolled: 5,
      CurrentFees: 700,
      discoundFees: 400,
      inWishlist: false,
      updated: new Date(),
    },
    {
      img: '../../../assets/imgs/1.jpg',
      title: 'Front end course',
      UserEnrolled: 4,
      CurrentFees: 1000,
      discoundFees: 400,
      inWishlist: true,
      updated: new Date(),
    },
    {
      img: '../../../assets/imgs/11.png',
      title: 'Css course',
      UserEnrolled: 2,
      isFree: true,
      inWishlist: true,
      updated: new Date(),
    },
    {
      img: '../../../assets/imgs/12.jpg',
      title: 'bootstrap  course',
      UserEnrolled: 0,
      CurrentFees: 700,
      discoundFees: 400,
      inWishlist: false,
      updated: new Date(),
    },
  ];

  
  ngOnInit(): void {
    // let topicId: number;
    // this.route.params.subscribe((params) => {
    //   topicId = params['id'] != null ? params['id'] : null;
    //   if (topicId != null) {
    //     this.topic = Topics.filter((topic) => topic.id == topicId)[0];
    //   }
    // });
    this.getAllTopics()
  }

  getAllTopics(){
    this._TopicsService.getAllTopics().subscribe( (res:any) =>{
      console.log(res)
    })
  }



}
