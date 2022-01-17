import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {COLOR_FAST, COLOR_MEDIUM, COLOR_SLOW, TEXT_FAST, TEXT_MEDIUM, TEXT_SLOW, TEXT_ZERO} from '../constant';

@Directive({
    selector: '[changeColor]'
})
export class ChangeColorDirective {

    constructor(
    private elementRef: ElementRef,
    private render: Renderer2) {}

    private changeCurrentColor( valueColor: string ): void {
        this.render.setStyle(this.elementRef.nativeElement,'color', valueColor);
    }

    private changeCurrentBackgroundColor( valueColor: string ): void {
        this.render.setStyle(this.elementRef.nativeElement,'backgroundColor', valueColor);
    }

    private changeCurrentText( valueText: string ): void {
        this.render.createText(this.elementRef.nativeElement.innerText = valueText);
    }

  @Input() set changeColor ( value: number | string )  {
        if ( !value ) {
            this.changeCurrentText(TEXT_ZERO);
        }

        if ( value > 0 && value < 50 ) {
            this.changeCurrentColor(COLOR_FAST);
        }

        if ( value >= 50 && value <= 75  ) {
            this.changeCurrentColor(COLOR_MEDIUM);
        }

        if ( value > 75 ) {
            this.changeCurrentColor(COLOR_SLOW);
        }
    }

  @Input() set changeBackgroundColor (value:  number ) {

      if ( value > 0 && value < 50 ) {
          this.changeCurrentBackgroundColor(COLOR_FAST);
          this.changeCurrentText(TEXT_FAST);
      }

      if ( value >= 50 && value <= 75  ) {
          this.changeCurrentBackgroundColor(COLOR_MEDIUM);
          this.changeCurrentText(TEXT_MEDIUM);
      }

      if ( value > 75 ) {
          this.changeCurrentBackgroundColor(COLOR_SLOW);
          this.changeCurrentText(TEXT_SLOW);
      }
  }
}
