import { Directive, ElementRef } from '@angular/core';

/**
 * Generated class for the TestDrDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[test-dr]' // Attribute selector
})
export class TestDrDirective {

  constructor(public elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = '#819FF7';
    this.elementRef.nativeElement.style.color = '#FFFFFF';
  }

}
