import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit{

  @Input() customColor!:string;

  constructor(private elementRef:ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.customColor
  }

}
