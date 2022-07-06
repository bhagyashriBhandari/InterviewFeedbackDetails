import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  signUpForm: FormGroup | any;
  recruiterSignUpForm: FormGroup | any;
  newUserArr: any = []

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      "userFname": new FormControl('', [Validators.required]),
      "userName": new FormControl('', [Validators.required]),
      "userContact": new FormControl('', [Validators.required]),
      "userEmail": new FormControl('', [Validators.required, Validators.email]),
      "userPassword": new FormControl('', [Validators.required]),
      "userRole": new FormControl('', [Validators.required]),
    });

    // this.recruiterSignUpForm = new FormGroup({
    //   "recruiterName": new FormControl(""),
    //   "recruiterUsrname": new FormControl(""),
    //   "recruiterEmail": new FormControl("", Validators.email),
    //   "recruiterContact": new FormControl(""),
    //   "recruiterPassword": new FormControl(""),
    // })
  }
  onSubmit() {
    // console.log(this.signUpForm.value.userRole)
    if (this.signUpForm.value.userRole === "Admin") {
      console.log("admin")
      this.http.post("https://feedback-e67e4-default-rtdb.firebaseio.com/admin.json", this.signUpForm.value).subscribe()
    } else if (this.signUpForm.value.userRole === "Recruiter") {
      console.log("recruiter")
      this.http.post("https://feedback-e67e4-default-rtdb.firebaseio.com/recruiter.json", this.signUpForm.value).subscribe()
    }else{
      console.log("interviewer");
      this.http.post("https://feedback-e67e4-default-rtdb.firebaseio.com/interviewer.json", this.signUpForm.value).subscribe()
    }
    this.signUpForm.reset()
  } 

  // onRecruiterSubmit() {
  //   if (this.recruiterSignUpForm.valid) {
  //     this.http.post("https://feedback-e67e4-default-rtdb.firebaseio.com/recruiter.json", this.recruiterSignUpForm.value).subscribe()
  //     this.recruiterSignUpForm.reset()
  //   } else {
  //     alert("Please Complete the Form")
  //   }
  // }
}
