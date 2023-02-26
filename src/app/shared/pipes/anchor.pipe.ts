import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anchor',
  standalone: true,
})
export class AnchorPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    value = `#${value}`;
    return value;
  }
}
