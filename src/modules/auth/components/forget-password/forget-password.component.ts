import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { NgForm, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  providers:[AuthService]
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private auth:AuthService) { }

  private pageTitle:String = 'forgot password';
  private project_title:String;

  private forgotForm:FormGroup;

  ngOnInit() {
    this.project_title = this.auth.vars.project_title;

    // design login form attribute
    this.forgotForm = new FormGroup({
      email: new FormControl (null, [Validators.required, Validators.email]),
    });
  }

}
