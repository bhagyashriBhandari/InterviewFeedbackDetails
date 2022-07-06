import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { FeedbackService } from 'src/app/Service/feedback.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  constructor(private fbServ:FeedbackService, private http : HttpClient) { }
 
  feedbackForm: FormGroup | any;
  newUserArr: any = [];
  


  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      "candidateName": new FormControl('', [Validators.required]),
      "interviewer": new FormControl('', [Validators.required]),
      "position": new FormControl('', [Validators.required]),
      "jsFundamentals": new FormControl('', [Validators.required]),
      "htmlCSS": new FormControl('', [Validators.required]),
      "reactAngular": new FormControl('', [Validators.required]),
      "technical": new FormControl('', [Validators.required]),
      "communication": new FormControl('', [Validators.required]),
      "result": new FormControl('', [Validators.required]),
    });

  }
  onFeedbackSubmit() {
    if (this.feedbackForm.valid) {
        this.http.post(this.fbServ.feedbackFormUrl, this.feedbackForm.value).subscribe();
      // this.http.post("https://feedback-e67e4-default-rtdb.firebaseio.com/feedbackForm.json", this.feedbackForm.value).subscribe()
    } else {
      alert("Please Complete Form")
    }
    console.log(this.feedbackForm.value)
    this.feedbackForm.reset();

    
  }
  

}



