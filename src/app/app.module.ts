import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditDialogComponent } from './customer-edit-dialog/customer-edit-dialog.component';
import { FormsModule } from '@angular/forms';
import { CustomerDeleteDialogComponent } from './customer-delete-dialog/customer-delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerEditDialogComponent,
    CustomerDeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
