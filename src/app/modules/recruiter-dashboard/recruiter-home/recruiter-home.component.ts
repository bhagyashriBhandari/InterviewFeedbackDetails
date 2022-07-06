import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { FeedbackService } from 'src/app/Service/feedback.service';

@Component({
  selector: 'app-recruiter-home',
  templateUrl: './recruiter-home.component.html',
  styleUrls: ['./recruiter-home.component.css']
})
export class RecruiterHomeComponent implements OnInit {

  constructor(private fbServ: FeedbackService, private http: HttpClient) { }
  recruiter: any;
  interviewer: any;
  ngOnInit(): void {
    this.recruiter = this.fbServ.recruiterData

    this.http.get("https://feedback-e67e4-default-rtdb.firebaseio.com/interviewer.json").pipe(map((data: any) => {
    let usrArr=[]
    for(let k in data){
      usrArr.push(data[k])
    }
    return usrArr
  })).subscribe((ele:any)=>{
    this.interviewer = ele
    console.log(this.interviewer)
  })
  }

}
