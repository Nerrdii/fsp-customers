import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICustomer } from './models/customer.model';

const CUSTOMERS: ICustomer[] = [
  {
    position: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@gmail.com',
    phone: '800-123-9876',
  },
  {
    position: 2,
    firstName: 'Max',
    lastName: 'Williams',
    email: 'max.williams@gmail.com',
    phone: '800-458-9654',
  },
  {
    position: 3,
    firstName: 'Sally',
    lastName: 'Jones',
    email: 'sally.jones@gmail.com',
    phone: '800-321-8745',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() {}

  getCustomers(): Observable<ICustomer[]> {
    return of(CUSTOMERS);
  }
}
