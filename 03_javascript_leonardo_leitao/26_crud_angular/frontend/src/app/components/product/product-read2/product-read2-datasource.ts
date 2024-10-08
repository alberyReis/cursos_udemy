import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Product } from '../product.model';

const EXAMPLE_DATA: Product[] = [
  {id: 1, name: 'Hydrogen', price: 9.99},
  {id: 2, name: 'Helium', price: 9.99},
  {id: 3, name: 'Lithium', price: 9.99},
  {id: 4, name: 'Beryllium', price: 9.99},
  {id: 5, name: 'Boron', price: 9.99},
  {id: 6, name: 'Carbon', price: 9.99},
  {id: 7, name: 'Nitrogen', price: 9.99},
  {id: 8, name: 'Oxygen', price: 9.99},
  {id: 9, name: 'Fluorine', price: 9.99},
  {id: 10, name: 'Neon', price: 9.99},
  {id: 11, name: 'Sodium', price: 9.99},
  {id: 12, name: 'Magnesium', price: 9.99},
  {id: 13, name: 'Aluminum', price: 9.99},
  {id: 14, name: 'Silicon', price: 9.99},
  {id: 15, name: 'Phosphorus', price: 9.99},
  {id: 16, name: 'Sulfur', price: 9.99},
  {id: 17, name: 'Chlorine', price: 9.99},
  {id: 18, name: 'Argon', price: 9.99},
  {id: 19, name: 'Potassium', price: 9.99},
  {id: 20, name: 'Calcium', price: 9.99},
];

export class ProductRead2DataSource extends DataSource<Product> {
  data: Product[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  connect(): Observable<Product[]> {
    if (this.paginator && this.sort) {
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  disconnect(): void {}

  private getPagedData(data: Product[]): Product[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  private getSortedData(data: Product[]): Product[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(a?.id ?? 0, b?.id ?? 0, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
