import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatListModule,
  MatInputModule,
  MatGridListModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatDialogModule

} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule

  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
