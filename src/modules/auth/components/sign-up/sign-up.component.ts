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

  private pageTitle:String = 'signup';

  constructor(private auth:AuthService) { }

  ngOnInit() {

    this.project_title = this.auth.vars.project_title;

    this.signupForm = new FormGroup ({
      first_name: new FormControl ('Test', [Validators.required, Validators.pattern ('^[a-z-A-Z\s]*')]),
      last_name: new FormControl ('Barber', [Validators.required, Validators.pattern ('^[a-z-A-Z\s]*')]),
      email: new FormControl ('barber@email.com', [Validators.required, Validators.email]),
      password: new FormControl ('123456', [Validators.required, Validators.maxLength(20)]),
      number: new FormControl ('9632587410', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    })
  }

  /**
   * Method to register user
   * @param form {first_name: "Test", last_name: "Dev", email: "barber@email.com", password: "123456", number: "1234567890"}
   */
  submitSignup (form:NgForm) {
    // show loader
    this.auth.vars.displayLoader (true)
    // register user
    this.auth.registerUser (form.value).subscribe ((res) => {
      console.log (res);
      // this.auth.vars.displayLoader(false)
    }, (err) => {
      console.log (err);
      // this.auth.vars.displayLoader(false)
    })
  }

}
