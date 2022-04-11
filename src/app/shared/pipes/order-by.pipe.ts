import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform<T extends object>(arr: T[] | null, sortByArr: {key: keyof T, isAsc?: boolean}[]): T[] | null {
    if (!arr || arr.length < 2) {
      return arr;
    }
    
    const sortByArrWithComparers = sortByArr.map(s => {
      return {
        ...s,
        comparer: this.getComparer(arr[0][s.key], s.isAsc)
      }
    });

    return arr.sort((a,b) => {
      const sortBy = sortByArrWithComparers.find(s => s.comparer(a[s.key],b[s.key]) !== 0)
      return sortBy?.comparer(a[sortBy.key],b[sortBy.key]) ?? 0;
    });

  }

  private getComparer(value: any, isAsc?: boolean) : (a: any, b: any) => number {
      if (!isNaN(parseFloat(value)) && !isNaN(value - 0)) {
        return isAsc
          ? (a, b) => a - b
          : (a, b) => b - a;
      }

      if (typeof value === 'string') {
        return isAsc
          ? (a, b) => a.localeCompare(b)
          : (a, b) => b.localeCompare(a);
      }

      if(isAsc) {
        return (a, b) => {
          if(a === b) return 0;
          return a < b ? 1 : -1;
        } 
      } else {
        return (a, b) => {
          if(a === b) return 0;
          return a < b ? -1 : 1;
        }
      }
  }

}
