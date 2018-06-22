import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
  		private qS:QuestionService,
  	) { }

  questions:any;
  ngOnInit() {
  	this.questions = this.qS.getQuestion();
  }

  theIndex = 0;


  test(){
    console.log("hi");
    this.theIndex = 0;
  }
  test1(){
    this.theIndex = 1;
  }

}
