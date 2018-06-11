import { Directive, ElementRef, AfterViewInit, HostListener } from '@angular/core';

export enum EXCLUDE_KEY_CODES {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  DOWN_ARROW = 40
}

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (!Object.values(EXCLUDE_KEY_CODES).includes(event.keyCode)) {
      this.el.nativeElement.focus();
  }

  }

  constructor(private el: ElementRef) { }
  ngAfterViewInit() {
    //this.el.nativeElement.focus();
  }
}
