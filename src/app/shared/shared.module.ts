import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';



const modules = [
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatIconModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class SharedModule { }
