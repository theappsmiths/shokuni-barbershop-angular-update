// import { Directive, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'appTrimInput',
  // host: {'(blur)': 'onchange($event)'}
})
export class TrimInputDirective {
  // constructor(private cdRef: ChangeDetectorRef, private el: ElementRef) { }

  // onChange($event: any) {
  //   let theEvent = $event || window.event;
  //   theEvent.target.value = theEvent.target.value.trim();
  // }

  constructor (private el:ElementRef) { }

  @Input() TrimField:boolean; 

  @HostListener ('blur', ['$event']) onblur (event) {
    console.log (event.target.value)
    event.target.value = event.target.value.trim();
  }

}