import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICertification } from 'src/app/shared/interfaces/certification';
import { IQuestion } from 'src/app/shared/interfaces/question';
import { CertificationsService } from 'src/app/shared/services/certifications.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  next_Question: EventEmitter<number>  = new EventEmitter();
  questions:any;
  choices:any;
  questionIndex:any;
  answers:any;
  totalQuestions:any;
  selectedIndex:any;
  finished:any;
  answered:any;
  score:any;

  Flag:Boolean = false;
  QuizDetails!:ICertification;
  timer_sec:number = 0;
  TimerCounter:any;
  QuestionTime:any;
  math = Math;

  constructor(
    private _CertificationsService:CertificationsService,
    private _ActivatedRoute:ActivatedRoute,
    private http:HttpClient,
    private _ToastrService:ToastrService,
    private Router:Router
  ) {
    this.selectedIndex = 0;
    this.questionIndex = 0;  
    this.finished = false;
    this.answered = false;
    this.score = 0;
  }

  ngOnInit() {
    this._ActivatedRoute.paramMap.subscribe(param => {
      this.getCertById(param.get("id"))
    })

    this.http.get<IQuestion>( '../../../../../assets/JSON/questions.json').subscribe(
      data => {
        this.questions = data.questions;
        this.choices = data.choices;
        this.answers = data.answers;
        this.totalQuestions = this.choices.length;
      }
    );
  }

  clickChoice(e:any) {
    this.answered = true;
    this.selectedIndex = parseInt(e.target.id.replace("choice",""));
  }

  nextQuestion(){
    if(this.finished){
      this.Router.navigate([`/landing/certifications/summary/${this.score}/${this.totalQuestions}`])
      this.resetQuiz();
    }
    else{

      if(!this.answered){
        this._ToastrService.warning("Please select an answer.")
        return;
      }

      this.answered = false;
      this.checkAnswer(this.selectedIndex);
      this.selectedIndex = -1;
      if(this.questionIndex < this.totalQuestions-1){
        this.questionIndex++;
      }
      else{
        this.finished = true;
      }
    }
  }

  onNextQuestion(){
    this.nextQuestion();
    this.timer_sec = (this.QuizDetails.duration/this.QuizDetails.number)*60;
    clearTimeout(this.QuestionTime);
    clearTimeout(this.TimerCounter);
    this.timer()
  }

  quizStart(){
    this.Flag = !this.Flag
    this.timer()
  }

  timer(){
    let intervalTime = (this.QuizDetails.duration/this.QuizDetails.number)*60
    this.QuestionTime = setInterval(() => {
      this.timer_sec = intervalTime
      this.clickChoice(0);
      this.onNextQuestion();
    }, intervalTime*1000);

    this.TimerCounter = setInterval(() => {
      this.timer_sec = this.timer_sec - 1
    }, 1000);
  }

  getCertById(cert_id:any){
    this._CertificationsService.getCertById(cert_id).subscribe( (res:any) => {
      this.QuizDetails = res.data
      console.log(res)
      this.timer_sec = (res.data.duration/res.data.number)*60
    },
    err=>{
      
    })
  }

  checkAnswer( selectedIndex:any ){
    if(this.answers[this.questionIndex] == selectedIndex){
      //Answer is correct
      this.score++;
    }
  }

  resetQuiz(){
    this.questionIndex = 0;
    this.finished = false;
      this.answered = false;
      this.score = 0;
  }

}
