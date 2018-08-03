import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  private loginForm:FormGroup;

  private project_title:String;
  private project_sub_title:String;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.project_title = this.auth.vars.project_title;
    this.project_sub_title = this.auth.vars.project_sub_title;

    // design login form attribute
    this.loginForm = new FormGroup({
      username: new FormControl (null, [Validators.required, Validators.email]),
      password: new FormControl (null, [Validators.required]),
      remember: new FormControl(null)
    });
  }

  /**
   * Method to submit login form
   * 
   * @param NgForm
   * 
   * @return void
   */
  submitLogin (form:NgForm):void {
    this.auth.vars.displayLoader(true);
    // call for login
    this.auth.loginUser (form.value).subscribe ((res) => {
      this.auth.vars.displayLoader(false);
    }, (err) => {
      this.auth.vars.displayLoader(false)
    })
  }
}
