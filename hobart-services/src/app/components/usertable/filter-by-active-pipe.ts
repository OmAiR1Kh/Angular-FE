import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByActive'
})
export class FilterByActivePipe implements PipeTransform {
  transform(users: any[], isActive: boolean): any[] {
    return users.filter(user => user.isActive === isActive);
  }
}
