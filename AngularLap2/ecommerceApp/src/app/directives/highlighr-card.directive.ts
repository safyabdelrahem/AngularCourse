import { Directive, ElementRef, HostListener,Input  } from '@angular/core';

@Directive({
  selector: '[appHighlighrCard]',
  standalone: true
})

export class HighlighrCardDirective {
 @Input()externalColor:string='black';
 @Input('appHighlighrCard') defaultColor:string='red';
@Input() bgColor: string='';

 

  constructor( private ele:ElementRef) { 
    ele.nativeElement.style.backgroundColor=this.defaultColor;
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setCardStyle(this.bgColor || 'transparent');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setCardStyle('transparent');
  }
  private setCardStyle(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
    this.ele.nativeElement.style.transition = 'background-color 0.3s ease-in-out';
  }


// @HostListener('mouseover')  over(){
//     this. ele.nativeElement.style.backgroundColor=this.externalColor;
//   }
// @HostListener('mouseout')  out(){
//     this. ele.nativeElement.style.backgroundColor=this.defaultColor
//   }

// bgColorFun() {
//   if (this.bgColor) {
//     this.renderer.setStyle(this.ele.nativeElement, 'background-color', this.bgColor);
//   }
//   this.renderer.setStyle(this.ele.nativeElement, 'border-radius', '10px');
//   this.renderer.setStyle(this.ele.nativeElement, 'box-shadow', '2px 2px 5px rgba(0, 0, 0, 0.1)');
// }

}
