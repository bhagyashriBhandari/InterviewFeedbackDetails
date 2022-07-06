import {  Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/Service/feedback.service';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  selectedCandidates : number = 0;
  rejectedCandidates : number = 0;
  secondRoundCandidates : number = 0;
  totalCandidates : number = 0;
  candidateArray : any = [];
  selected : any;
  rejected : any;
  secondRound : any;
  candidateData : any;
  
  constructor(private fbServ : FeedbackService, private http : HttpClient) { }

  ngOnInit(): void {
  

    this.http.get(this.fbServ.feedbackFormUrl).pipe(map((getData:any)=>{
      let dataArray = [];
      for(let key in getData){
        dataArray.push(getData[key])
      }
      return dataArray;
    })).subscribe((data:any)=>{
      for(let key in data){
        this.candidateArray.push(data[key]);
      }
    console.log(this.candidateArray);
    //return this.candidateArray;
    this.selected = this.candidateArray.filter((candidate:any) => {
      return candidate.result === "Selected"
    });
    this.rejected = this.candidateArray.filter((candidate:any) => {
      return candidate.result === "Rejected"
    });
    this.secondRound = this.candidateArray.filter((candidate:any) => {
      return candidate.result !== "Selected" && candidate.result !== "Rejected"
    });
    console.log(this.selected.length);
    console.log(this.rejected.length);
    console.log(this.secondRound.length);
    this.totalCandidates = this.selected.length + this.rejected.length + this.secondRound.length;
    console.log(this.totalCandidates)

    this.candidateData = {
      selectedCandidates : this.selected.length,
      rejectedCandidates : this.rejected.length,
      secondRoundCandidates : this.secondRound.length,
      totalCandidates : this.selected.length + this.rejected.length + this.secondRound.length,
    }
    return this.candidateData;
    })

  }
 
}

