import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { AlertService } from '../alert.service';
import { CustomerDeleteDialogComponent } from '../customer-delete-dialog/customer-delete-dialog.component';
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
    private customerService: CustomerService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  onEdit(element: ICustomer) {
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
          this.alertService.openSnackBar('Customer edited!');
        }
      });
  }

  onAdd() {
    const dialogRef = this.dialog.open(CustomerEditDialogComponent, {
      data: {
        customer: {
          position: this.customers.slice(-1)[0].position + 1,
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        },
        title: 'Add Customer',
      },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.customerService
            .addCustomer(result)
            .subscribe((customers) => (this.customers = customers));
          this.alertService.openSnackBar('Customer added!');
        }
      });
  }

  onDelete(element: ICustomer) {
    const dialogRef = this.dialog.open(CustomerDeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.customerService
          .deleteCustomer(element.position)
          .subscribe((customers) => (this.customers = customers));
        this.alertService.openSnackBar('Customer deleted!');
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
