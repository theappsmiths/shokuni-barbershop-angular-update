import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent implements OnInit {

  private static readonly errorMessages = {
    'required': (params) => '##FIELD## can\'t be blank',
    'minlength': (params) => '##FIELD## should be minimum '+params.requiredLength+' characters',
    'maxlength': (params) => '##FIELD## should not be greater then '+params.requiredLength+' characters',
    'pattern': (params) => 'Should be a valid',
    'email': (params) => "Should be vaild email.",
  };

  @Input() private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control && this.control.errors && (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors).map(field => 
      this.getMessage(field, this.control.errors[field],this.control)
    );
  }

  getError(): string {
    //console.log("show",this.control.errors);
    let errors = Object.keys(this.control.errors)
        .map(field => this.getMessage(field, this.control.errors[field],this.control)
      );

    return errors[0];
  }
    
    
  private getMessage(type: string, params: any,control:any) {
    let fname = this.getControlName(control);
    fname = fname.replace("_"," ").replace(" id","").toLowerCase();
    fname = fname.replace(/\b\w/g, l => l.toUpperCase());
    let msg = ShowErrorsComponent.errorMessages[type](params);
    return msg.replace("##FIELD##",fname);
  }


  getControlName(c: AbstractControl): string | null {
    const formGroup = c.parent.controls;
    return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
  }

  ngOnInit() { }

}
