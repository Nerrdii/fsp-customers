import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-delete-dialog',
  templateUrl: './customer-delete-dialog.component.html',
  styleUrls: ['./customer-delete-dialog.component.css'],
})
export class CustomerDeleteDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CustomerDeleteDialogComponent>) {}

  ngOnInit(): void {}

  onDelete() {
    this.dialogRef.close(true);
  }
}
