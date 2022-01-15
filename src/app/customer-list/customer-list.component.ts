import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from '../models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  @Input()
  customers!: ICustomer[];

  displayedColumns = ['firstName', 'lastName', 'email', 'phone'];

  constructor() {}

  ngOnInit(): void {}
}
