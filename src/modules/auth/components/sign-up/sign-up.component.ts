import { Component, OnInit } from '@angular/core';

import { NgForm, Validators, FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private signupForm:FormGroup;

  private project_title:String;
  private project_sub_title:String;

  constructor(private auth:AuthService) { }

  ngOnInit() {

    this.project_title = this.auth.vars.project_title;
    this.project_sub_title = this.auth.vars.project_sub_title;

    this.signupForm = new FormGroup ({
      email: new FormControl (null, [Validators.required, Validators.email]),
      password: new FormControl (null, [Validators.required, Validators.maxLength(20)]),
      repassword: new FormControl (null, [Validators.required, Validators.maxLength(20)]),
      number: new FormControl (null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    })
  }

  submitSignup (form:NgForm) {

  }

}
