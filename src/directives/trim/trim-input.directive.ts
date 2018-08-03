import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrimInput]',
})
export class TrimInputDirective {

  constructor () { }

  @Input() TrimField:boolean; 

  /**
   * Remove whitespace on focus out
   * @param event 
   */
  @HostListener ('blur', ['$event']) onblur (event) {
    event.target.value = event.target.value.trim();
  }

}