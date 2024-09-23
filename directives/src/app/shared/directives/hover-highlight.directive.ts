import { Directive, HostBinding, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  @Input() customColor!:string;

  @HostBinding('style.backgroundColor') backGroundColor :string = "blue" ;

  constructor() { }

  @HostListener('mouseenter') onMouseEnter(){
    this.backGroundColor = this.customColor;
  }  
  
  @HostListener('mouseleave') onMouseLeave(){
    this.backGroundColor = "blue";
  }


}
