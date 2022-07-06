import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { FeedbackService } from 'src/app/Service/feedback.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  candidateArray : any = []
  constructor(private fbServe : FeedbackService, private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.fbServe.feedbackFormUrl).pipe(map((getData : any)=>{
      let dataArray : any = [];
      for(let key in getData){
        dataArray.push(getData[key])
      }
      return dataArray;
    })).subscribe((data : any)=>{
      for(let key in data){
        console.log(data[key])
        this.candidateArray.push(data[key]);
      }
     return(this.candidateArray)
    })
  }
}
