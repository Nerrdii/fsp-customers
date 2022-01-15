import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { CustomerEditDialogComponent } from '../customer-edit-dialog/customer-edit-dialog.component';
import { CustomerService } from '../customer.service';
import { ICustomer } from '../models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit, OnDestroy {
  @Input()
  customers!: ICustomer[];

  displayedColumns = [
    'firstName',
    'lastName',
    'email',
    'phone',
    'edit',
    'delete',
  ];

  private destroy$: Subject<void> = new Subject();

  constructor(
    public dialog: MatDialog,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {}

  openEditDialog(element: ICustomer) {
    const dialogRef = this.dialog.open(CustomerEditDialogComponent, {
      data: {
        customer: element,
        title: 'Edit Customer',
      },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.customerService
            .editCustomer(result)
            .subscribe((customers) => (this.customers = customers));
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
