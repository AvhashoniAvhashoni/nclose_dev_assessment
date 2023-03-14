import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    // angular material module 
    MatToolbarModule, // header
    MatCardModule, // card
    MatInputModule, // input
    MatIconModule, //icon
    MatButtonModule, // button
    MatRippleModule, // ripple
    MatSnackBarModule, // snackbar
    DragDropModule, // cdk drag and drop
  ],
})
export class MaterialModule { }
