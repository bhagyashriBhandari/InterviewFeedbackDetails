import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { FeedbackService } from '../Service/feedback.service';

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private fbServ: FeedbackService) { }
  interviewerForm: FormGroup | any;
  recruiterForm: FormGroup | any;
  newUsersData: any = []
  logUser:any;

  ngOnInit(): void {
    this.interviewerForm = new FormGroup({
      "interviewerEmail": new FormControl('', [Validators.required, Validators.email]),
      "interviewerPassword": new FormControl('', [Validators.required]),
    });
    this.recruiterForm = new FormGroup({
      "recruiterEmail": new FormControl('', [Validators.required, Validators.email]),
      "recruiterPassword": new FormControl('', [Validators.required]),
    });
  }

  onInterviewerSubmit() {
    console.log(this.interviewerForm.value);
    this.http.get("https://feedback-e67e4-default-rtdb.firebaseio.com/interviewer.json").pipe(map((getData: any) => {
      let dataArray = []
      for (let key in getData) {
        dataArray.push(getData[key])
      }
      return dataArray
    })).subscribe(data => {
      this.logUser = data.filter(ele => {
        if (ele.userEmail == this.interviewerForm.value.interviewerEmail && ele.userPassword == this.interviewerForm.value.interviewerPassword) {
          console.log("hi i am interviewer")
           this.router.navigate(["interviewer"])
          this.interviewerForm.reset()
          this.fbServ.interviewerData = ele;
        }
      })

      localStorage.setItem("interviewerData",this.logUser)
    })
    
   }
   onRecruiterSubmit(){
    console.log(this.recruiterForm.value);
    this.http.get("https://feedback-e67e4-default-rtdb.firebaseio.com/recruiter.json").pipe(map((getData: any) => {
      let dataArray = []
      for (let key in getData) {
        dataArray.push(getData[key])
      }
      return dataArray
    })).subscribe(data => {
      this.logUser = data.filter(ele => {
        if (ele.userEmail == this.recruiterForm.value.recruiterEmail && ele.userPassword == this.recruiterForm.value.recruiterPassword) {
          console.log("hi i am recruiter")
           this.router.navigate(["recruiter"])
            this.interviewerForm.reset()
          
        }else{
          alert("Please Enter valid email and password")
        }

      })

      localStorage.setItem("recruiterData",this.logUser)
    })
   


   
 }
  
  }
  

