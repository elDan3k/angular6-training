import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, letters: number): string {
    return value.substr(0, letters).toUpperCase() + value.substr(letters);
  }

}
