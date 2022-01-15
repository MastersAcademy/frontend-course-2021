import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[changeColor]'
})
export class ChangeColorDirective {

    constructor(
    private elementRef: ElementRef,
    private render: Renderer2)
    {}

    private changeCurrentColor( valueColor:string ): void {
        this.render.setStyle(this.elementRef.nativeElement,'color', valueColor);
    }

    private changeCurrentBackgroundColor( valueColor:string ): void {
        this.render.setStyle(this.elementRef.nativeElement,'backgroundColor', valueColor);
    }

    private changeCurrentText( valueText:string ): void {
        this.render.createText(this.elementRef.nativeElement.innerText = valueText);
    }

  @Input() set changeColor ( value: number | string )  {
        if ( value == undefined) {
            this.changeCurrentText('0')
        }

        if ( value > 0 && value < 50 ) {
            this.changeCurrentColor('#0cc508');
        }

        if ( value >= 50 && value <= 75  ) {
            this.changeCurrentColor('#b2891b');
        }

        if ( value > 75 ) {
            this.changeCurrentColor('#ee1803');
        }
    }

  @Input() set changeBackgroundColor (value: number ) {

      if ( value > 0 && value < 50 ) {
          this.changeCurrentBackgroundColor('#0cc508');
          this.changeCurrentText('fast');
      }

      if ( value >= 50 && value <= 75  ) {
          this.changeCurrentBackgroundColor('#f3b42b');
          this.changeCurrentText('medium');
      }

      if ( value > 75 ) {
          this.changeCurrentBackgroundColor('#ee1803');
          this.changeCurrentText('slow');
      }
  }
}
