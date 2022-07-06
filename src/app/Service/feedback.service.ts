import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedbackFormUrl : any = "https://feedback-e67e4-default-rtdb.firebaseio.com/feedbackForm.json";
  constructor() { }
  interviewerData:any=[]
  recruiterData:any=[]

}
