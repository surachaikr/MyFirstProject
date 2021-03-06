import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TestPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'testPipe',
})
export class TestPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    return value.toLowerCase();
  }
}
