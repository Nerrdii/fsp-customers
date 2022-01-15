import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICustomer } from '../models/customer.model';

@Component({
  selector: 'app-customer-edit-dialog',
  templateUrl: './customer-edit-dialog.component.html',
  styleUrls: ['./customer-edit-dialog.component.css'],
})
export class CustomerEditDialogComponent implements OnInit {
  public newCustomer!: ICustomer;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { customer: ICustomer; title: string },
    public dialogRef: MatDialogRef<CustomerEditDialogComponent>
  ) {}

  ngOnInit(): void {
    this.newCustomer = { ...this.data.customer };
  }

  onSave() {
    this.dialogRef.close(this.newCustomer);
  }
}
